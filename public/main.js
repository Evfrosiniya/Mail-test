'use strict';

import './css/main.scss';


let tabChange = function (evt, name, tabname) {
	let  i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName('content__vacancy-requirement-list');
	for (i = 0; i < 2; i++) {
		tabcontent[i].classList.remove('active-list');
	}

	tablinks = document.getElementsByClassName('content__vacancy-requirement_nav-tab');
	for (i = 0; i < 2; i++) {
		tablinks[i].classList.remove('active-tab');
	}
	document.getElementById(tabname).classList.add('active-tab');
	document.getElementById(name).classList.add('active-list');
}
let photoChange = function (evt, id) {

	let  i, photocontent;
	photocontent = document.getElementsByClassName('photos_elem');
	for (i = 0; i < photocontent.length; i++) {
		photocontent[i].classList.remove('active');
	}

	document.getElementById(id).classList.add('active');
}