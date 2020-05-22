
    // 'use strict';

window.onpageshow = function() {
console.log("ff called");

const users = [];

const form = document.getElementById('contact-form');

form.onsubmit = formSubmit;

function formSubmit(e) {

	e.preventDefault();
	
    const userName = document.querySelector('input[name=userName]');
	const phone = document.querySelector('input[name=phone]');
	const mail = document.querySelector('input[name=mail]');
    users.push({ usename: userName.value, phone: phone.value, email: mail.value});

    console.log(users);
    alert('Thank You! We will contact You soon!');
}


// const firstName = document.querySelector('input[name=firstname]');

formSubmit.onkeyup = showAlert;

function showAlert(event) {
    alert('Thank You! We will contact You soon!');
  }

// console.log(firstName);

}

 