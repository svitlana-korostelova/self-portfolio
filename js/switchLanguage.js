window.onload = function() {
	const ukrLang = document.getElementById('ukrainian');
	const enLang = document.getElementById('english');


	ukrLang.onchange = function () {
		// const ukrTexts = document.querySelectorAll('.ukrainian');
		// const enTexts = document.querySelectorAll('.english');

		// ukrTexts.forEach(function (element) {
		// 	element.style.display = "block";
		// });

		// enTexts.forEach(function (element) {
		// 	element.style.display = "none";
		// });
		changeLanguage("ukrainian");
	}

	enLang.onchange = function () {
		// const ukrTexts = document.querySelectorAll('.ukrainian');
		// const enTexts = document.querySelectorAll('.english');

		// ukrTexts.forEach(function (element) {
		// 	element.style.display = "none";
		// });

		// enTexts.forEach(function (element) {
		// 	element.style.display = "block";
		// });

		changeLanguage("english");
	}

	function changeLanguage(language) {
		const ukrTexts = document.querySelectorAll('.ukrainian');
		const enTexts = document.querySelectorAll('.english');

		let ukrDisplay = language === "english" ? "none" : "block"
		let engDisplay = language === "english" ? "block" : "none"
		
		ukrTexts.forEach(function (element) {
			element.style.display = ukrDisplay;
		});

		enTexts.forEach(function (element) {
			element.style.display = engDisplay;
		});
	}
}