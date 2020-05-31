// 'use strict';

window.onpageshow = function() {

    const users = [];

    const form = document.getElementById('contact-form');

    form.onsubmit = formSubmit;

    function formSubmit(e) {

        e.preventDefault();

        const userName = document.querySelector('input[name=userName]');
        const phone = document.querySelector('input[name=phone]');
        const mail = document.querySelector('input[name=mail]');
        const userLang = document.querySelector('select[name=userLang]');
        users.push({ name: userName.value, phone: phone.value, email: mail.value, language: userLang.value });
        console.log(userLang.value);
        if (userLang.value === 'Ukrainian') {
            alert('Дякуємо! Ми з Вами скоро зв`яжемося!');
        } else if (userLang.value === 'Russian') {
            alert('Спасибо! Скоро мы с Вами свяжемся!');
        } else {
            alert('Thank You! We will contact You soon!');
        }
        console.log(users);
    }

}

// formSubmit.onkeyup = showAlert;

// function showAlert(event) {
//     alert('Thank You! We will contact You soon!');
//   }