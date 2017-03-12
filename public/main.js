'use strict';

import './css/main.scss';


const tabChange = function (id, listid) {

	const tabcontent = document.getElementsByClassName('content__vacancy-requirement-list');
	for (let i = 0; i < 2; i++) {
		tabcontent[i].classList.remove('active-list');
	}

	const tablinks = document.getElementsByClassName('content__vacancy-requirement_nav-tab');
	for (let i = 0; i < 2; i++) {
		tablinks[i].classList.remove('active-tab');
	}
	document.getElementById(id).classList.add('active-tab');
	document.getElementById(listid).classList.add('active-list');
};


const tabList = document.getElementsByClassName('content__vacancy-requirement_nav-tab');
for (let i = 0; i < tabList.length; i++) {
	tabList[i].addEventListener('click', function (event) {
		const click = event.target;
		const uniqParam = click.getAttribute('data-uniq-param');
		tabChange(uniqParam, uniqParam + '-list');
	});
}


const width = document.getElementById('photos').offsetWidth;

const lis = document.getElementsByClassName('photos_elem');
for (let i = 0; i < lis.length; i++) {
	lis[i].style.position = 'relative';
	lis[i].style.width = width + 'px';
	const span = document.createElement('span');
	span.style.cssText = 'position:absolute;left:0;top:0';
	span.innerHTML = i + 1;
	lis[i].appendChild(span);
}

const miniLis = document.getElementsByClassName('photos-mini_elem');
for (let i = 0; i < miniLis.length; i++) {
	miniLis[i].id = i;
}

let position = 0;
const photoList = document.getElementsByClassName('photos-mini_elem');
for (let i = 0; i < photoList.length; i++) {
	photoList[i].addEventListener('click', function (event) {
		for (let j = 0; j < photoList.length; j++) {
			photoList[j].classList.remove('active-mini');
		}
		photoList[i].classList.add('active-mini');

		const count = photoList[i].id;
		position = width * Number(count);
		document.getElementById('photos-ul').style.marginLeft = -position + 'px';
	});
}


const buttonSend = document.getElementById('sendForm');
buttonSend.addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('error-text').removeChild(document.getElementById('error'));
	const errorMessage = document.createElement('span');
	errorMessage.setAttribute('id', 'error');

	const formdata = {
		name: document.getElementsByTagName('input')[0].value,
		surname: document.getElementsByTagName('input')[1].value,
		email: document.getElementsByTagName('input')[2].value,
		tel: document.getElementsByTagName('input')[3].value,
	};

	if (!formdata.name) {
		document.getElementsByTagName('input')[0].classList.add('empty');

		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName('input')[0].classList.remove('empty');
	}
	if (!formdata.surname) {
		document.getElementsByTagName('input')[1].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName('input')[1].classList.remove('empty');
	}
	if (!formdata.email) {
		document.getElementsByTagName('input')[2].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName('input')[2].classList.remove('empty');
	}
	if (!formdata.tel) {
		document.getElementsByTagName('input')[3].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName('input')[3].classList.remove('empty');
	}

	const at = formdata.email.indexOf('@');
	const dot = formdata.email.indexOf('.');
	if (at < 1 || dot < 1) {
		document.getElementsByTagName('input')[2].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName('input')[2].classList.remove('empty');
	}

	const regexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	if (formdata.tel.search(regexp) == -1) {
		document.getElementsByTagName('input')[3].classList.add('empty');
		errorMessage.innerHTML = 'Заполните поля правильно!';
	} else {
		document.getElementsByTagName('input')[3].classList.remove('empty');
	}
	if (errorMessage.innerHTML === '') {
		if (screen.width > 1050) {
			document.getElementsByClassName('content__vacancy-form')[0].style.display = 'none';
			document.getElementsByClassName('content__vacancy-form-done')[0].style.display = 'block';
		} else {
			document.getElementsByClassName('header')[0].style.display = 'none';
			document.getElementsByClassName('content')[0].style.display = 'none';
			document.getElementsByClassName('wrapper')[0].style.background = 'transparent';
			document.getElementsByClassName('header__vacancy')[0].style.color = '#ffffff';

			const img = document.createElement('IMG');
			img.src = '/public/images/ok.svg';
			const span1 = document.createElement('span');
			const span2 = document.createElement('span');
			span1.innerHTML = 'Получилось!';
			span2.innerHTML = 'Мы с вами скоро свяжемся!';

			const footer = document.createElement('span');
			footer.classList.add('footer-mobile');
			footer.innerHTML = '© Mail.ru HR TEAM';


			document.getElementById('vacancy-form-done-mobile').appendChild(img);
			document.getElementById('vacancy-form-done-mobile').appendChild(span1);
			document.getElementById('vacancy-form-done-mobile').appendChild(span2);
			document.getElementById('vacancy-form-done-mobile').appendChild(footer);

		}

	}

	document.getElementById('error-text').appendChild(errorMessage);

});
