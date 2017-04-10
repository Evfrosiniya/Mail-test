'use strict';

const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'babel-polyfill',
		'eventsource-polyfill',
		path.resolve(__dirname, 'public/main.js')
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: path.join('assets', 'js', 'bundle.js'),
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['latest']
				}
			},
			{
				test: /\.s?css$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: ['css-loader?minimize', 'postcss-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	resolve: {
		alias: {}
	},
	resolveLoader: {
		alias: {}
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new webpack.LoaderOptionsPlugin({
			debug: true,
			postcss: [precss, autoprefixer]
		}),
		new HtmlPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'public/index.html')
		}),
		new ExtractTextPlugin(path.join('css', '[name].bundle.[hash].css')),

	]
};
