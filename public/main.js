'use strict';

import './css/main.scss';


window.tabChange = function (evt, name, tabname) {

	let tabcontent = document.getElementsByClassName('content__vacancy-requirement-list');
	for (let i = 0; i < 2; i++) {
		tabcontent[i].classList.remove('active-list');
	}

	let tablinks = document.getElementsByClassName('content__vacancy-requirement_nav-tab');
	for (let i = 0; i < 2; i++) {
		tablinks[i].classList.remove('active-tab');
	}
	document.getElementById(tabname).classList.add('active-tab');
	document.getElementById(name).classList.add('active-list');
}
window.photoChange = function (evt, id) {

	let photocontent = document.getElementsByClassName('photos_elem');
	for (let i = 0; i < photocontent.length; i++) {
		photocontent[i].classList.remove('active');
	}

	document.getElementById(id).classList.add('active');
}

//let button1 = ...;
//let button2 = ...;

//button1.addEventListener('click', tabChange);
//button2.addEventListener('click', photoChange);

// let tabList=document.getElementsByClassName('content__vacancy-requirement_nav-tab');
// for (let i = 0; i < tabList.length; i++) {
// 	tabList.addEventListner('click', function (event) {
// 		const click = event.target;
// 		const uniqParam = click.getAttribute('data-uniq-param');
// 		console.log(uniqParam);
// 		tabChange()
// 	});
// }

