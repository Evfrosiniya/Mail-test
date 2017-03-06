'use strict';

import './css/main.scss';


let tabChange = function (id,listid) {

	let tabcontent = document.getElementsByClassName('content__vacancy-requirement-list');
	for (let i = 0; i < 2; i++) {
		tabcontent[i].classList.remove('active-list');
	}

	let tablinks = document.getElementsByClassName('content__vacancy-requirement_nav-tab');
	for (let i = 0; i < 2; i++) {
		tablinks[i].classList.remove('active-tab');
	}
	document.getElementById(id).classList.add('active-tab');
	document.getElementById(listid).classList.add('active-list');
}


let tabList = document.getElementsByClassName('content__vacancy-requirement_nav-tab');
for (let i = 0; i < tabList.length; i++) {
	tabList[i].addEventListener('click', function (event) {
		const click = event.target;
		const uniqParam = click.getAttribute('data-uniq-param');
		tabChange(uniqParam, uniqParam + '-list')
	});
}

let width = document.getElementById('photos').offsetWidth;

let lis = document.getElementsByClassName('photos_elem');
for (let i = 0; i < lis.length; i++) {
	lis[i].style.position = 'relative';
	lis[i].style.width = width + 'px';
	let span = document.createElement('span');
	span.style.cssText = 'position:absolute;left:0;top:0';
	span.innerHTML = i + 1;
	lis[i].appendChild(span);


}

let miniLis = document.getElementsByClassName('photos-mini_elem');
for (let i = 0; i < miniLis.length; i++) {
	miniLis[i].id = i;
}

let position = 0;


let photoList = document.getElementsByClassName('photos-mini_elem');
for (let i = 0; i < photoList.length; i++) {
	photoList[i].addEventListener('click', function (event) {

		let count  = photoList[i].id;
		position = width * Number(count);
		document.getElementById('photos-ul').style.marginLeft = -position + 'px';
	});
}