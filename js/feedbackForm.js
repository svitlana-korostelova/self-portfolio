// 'use strict';

window.onpageshow = function() {

    const users = [];

    const form = document.getElementById('contact-form');

    form.onsubmit = formSubmit;

    function formSubmit(contactUs) {

        contactUs.preventDefault();

        const userName = document.querySelector('input[name=userName]');
        const phone = document.querySelector('input[name=phone]');
        const mail = document.querySelector('input[name=mail]');
        const userLang = document.querySelector('select[name=userLang]');
        const comment = document.querySelector('textarea[name=subject]');
        users.push({ name: userName.value, phone: phone.value, email: mail.value, language: userLang.value, comment: comment.value});
        
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