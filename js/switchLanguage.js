window.onload = function() {
  console.log("sl called");

 const ukrLang = document.getElementById('ukrainian');
 const enLang = document.getElementById('english');
 const language = localStorage.getItem("language")

 if (language != null) {
  changeLanguage(language)
  if (ukrLang != null && language === "ukrainian") {
    ukrLang.checked = true
  } else if(enLang != null){
    enLang.checked = true
  }
 }

 if (ukrLang != null) {
    ukrLang.onchange = function () {
      localStorage.setItem("language","ukrainian");
      changeLanguage("ukrainian");
     }
 }

 if (enLang != null) {
  enLang.onchange = function () {
    localStorage.setItem("language","english");
    changeLanguage("english");
   }
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