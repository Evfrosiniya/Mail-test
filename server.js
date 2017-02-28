'use strict';

const express = require('express');
const parser = require('body-parser');
const compression = require('compression');

const app = express();
app.use(compression());
app.use('/', express.static('dist'));
app.use('/public', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8000, () => {
	console.log(`App started on port ${process.env.PORT || 8000}`);
});
