'use strict';

import './css/main.scss';


let tabChange = function (id, listid) {

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
		for (let j = 0; j < photoList.length; j++) {
			photoList[j].classList.remove('active-mini');
		}
		photoList[i].classList.add('active-mini');

		let count = photoList[i].id;
		position = width * Number(count);
		document.getElementById('photos-ul').style.marginLeft = -position + 'px';
	});
}


let buttonSend = document.getElementById('sendForm');
buttonSend.addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('error-text').removeChild(document.getElementById('error'));
	let errorMessage = document.createElement('span');
	errorMessage.setAttribute('id', 'error');

	const formdata = {
		name: document.getElementsByTagName("input")[0].value,
		surname: document.getElementsByTagName("input")[1].value,
		email: document.getElementsByTagName("input")[2].value,
		tel: document.getElementsByTagName("input")[3].value,
	};

	if (!formdata.name) {
		document.getElementsByTagName("input")[0].classList.add('empty');

		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName("input")[0].classList.remove('empty');
	}
	if (!formdata.surname) {
		document.getElementsByTagName("input")[1].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName("input")[1].classList.remove('empty');
	}
	if (!formdata.email) {
		document.getElementsByTagName("input")[2].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName("input")[2].classList.remove('empty');
	}
	if (!formdata.tel) {
		document.getElementsByTagName("input")[3].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName("input")[3].classList.remove('empty');
	}

	let at = formdata.email.indexOf("@");
	let dot = formdata.email.indexOf(".");
	if (at < 1 || dot < 1) {
		document.getElementsByTagName("input")[2].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName("input")[2].classList.remove('empty');
	}

	let regexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	if (formdata.tel.search(regexp) == -1) {
		document.getElementsByTagName("input")[3].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName("input")[3].classList.remove('empty');
	}
	if (errorMessage.innerHTML === '') {
		console.log('good');
	}

	document.getElementById('error-text').appendChild(errorMessage);

});