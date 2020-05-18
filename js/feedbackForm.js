
    // 'use strict';

window.onload = function() {

const users = [];

const form = document.getElementById('contact-form');

form.onsubmit = formSubmit;

function formSubmit(e) {

	e.preventDefault();
	
    const firstName = document.querySelector('input[name=firstname]');

    users.push({ usename: firstName.value, phone: 123 });

    console.log(users[0]);
}


// const firstName = document.querySelector('input[name=firstname]');

// firstName.onkeyup = showAlert;

// function showAlert(event) {
//     alert(firstName.value);
//   }

// console.log(firstName);

}

 