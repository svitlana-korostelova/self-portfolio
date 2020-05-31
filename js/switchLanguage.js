window.onload = function() {
    //Data from ITA
    var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdiYzlhYTZiMTg0OGMxNjlmMTI4NTQ2OGI3Mjc4ZjEzNGRlNDliOTM0MjVmYWJlMWQyOThiMjhmYWU4MjY5ZTg0MTI0ZDcxNjdhNjM1ZmY5In0.eyJhdWQiOiIxMCIsImp0aSI6IjdiYzlhYTZiMTg0OGMxNjlmMTI4NTQ2OGI3Mjc4ZjEzNGRlNDliOTM0MjVmYWJlMWQyOThiMjhmYWU4MjY5ZTg0MTI0ZDcxNjdhNjM1ZmY5IiwiaWF0IjoxNTkwNDIwNDIwLCJuYmYiOjE1OTA0MjA0MjAsImV4cCI6MTkwNTk1MzIyMCwic3ViIjoiMjE3NSIsInNjb3BlcyI6W119.5B0_jyOZHWUleghwJfPBPvMUqRtBYZiRn6CBm4swtzL3LtdJ3CCj5kdmubleM4eesptCK4MyXZCIRinOTT_xWdGsI_3hDXqXDn9XdYzGiDa67d_Gp-biNrVMCjNIaHuFH5c9bD5JfnW9i5JF9C7dlwLAEZgrOCKm4Ulsp02lJR7Fc4aVCR5qcGZN-tNqT7ECAEKc_CGEyX77lISQhCCcZW57PCPRYfrzUON2A2xHACmNqqwpJV6_NXilcBfm2pc1v6P9e_LTGrbq16m1YvbSO22WAQzRYERZywK9vFn3j6VgCK5pzlNOAVrHWMWdl_JcSGL0FL-qkBwvPmYKjC2SLeYqYmEdrM8MudMo66OZsp3rfuHteUX9CgreydU6AD0c6lVu8mH5DSbJM8vsBbizeNnZvJLRnNNBEha_ooFO6cebrJOmJDwm1uoHEquslhiVKQYI5ku_cTvditOvo2SXOuThHsJLeLitJ--faEiA3rpD28Pf7E9RYiS_X4yRUiNsXvZbWHiNk5AEsRTFG_tDLfbOMlj0lPfKxv3WmQT5AS39n91gvHqphCIIHkdBE4uMXgNJXMY05yN0jSPbbQJd6l8RfyqNhRcEg99HotJ9A1kFPSNUR00Zsn11JLwNyJOYFYtFe5b_Nza0EUJdvNAIMPVGoHgADLJQyyndy-Y_O6g';
    var intitaClient = new INTITAClient({
        key: API_KEY,
    });

    // USER DATA
    intitaClient.getUserDetails(function(error, data) {
        if (error != null) {
            console.log(error)
            return
        }
        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const address = document.getElementById('address')
        const education = document.getElementById('education')
        if (name != null) {
            name.innerText = data.firstName + " " + data.secondName + ".";
        }
        if (email != null) {
            email.innerText = data.email;
        }
        if (address != null) {
            address.innerText = " " + data.country + ". " + data.city + ". " + data.address + ". ";
        }
        if (education != null) {
            education.innerText = " " + data.education + ". ";
        }
    });

    // MODULES DATA
    intitaClient.getUserCoursesAndModules(CoursesAndModulesCallback);

    function CoursesAndModulesCallback(error, data) {
        const coursesItem = document.getElementById("courses");
        if (coursesItem != null) {
            coursesItem.innerText = data.courses[0].title;
        }

        let modulesItem = document.getElementById("modules");
        if (modulesItem != null) {
            intitaClient.getCourseModules(data.courses[0].id, function(error, modules) {
                if (error != null) {
                    console.log(error)
                    return
                }

                modules.forEach(function(module) {
                    let moduleName = module.title;
                    let moduleId = module.id;
                    let oneModuleItem = document.createElement("div");

                    oneModuleItem.onclick = function() {
                        if (lecturesList.style.display == "block") {
                            lecturesList.style.display = "none";
                        } else {
                            lecturesList.style.display = "block";
                        }
                    };

                    oneModuleItem.innerHTML = "<li>" + moduleName + "</li>";
                    modulesItem.appendChild(oneModuleItem);
                    let lecturesList = document.createElement("ul");
                    lecturesList.style.cssText = "padding-left:100px";
                    lecturesList.style.display = "none";
                    oneModuleItem.appendChild(lecturesList);

                    intitaClient.getModuleLectures(moduleId, function(error, lectures) {
                        if (error != null) {
                            console.log(error)
                            return
                        }
                        lectures.forEach(function(lecture) {
                            let lectureName = document.createElement("li");
                            lectureName.innerText = lecture.title;
                            lecturesList.appendChild(lectureName);
                        });
                    });
                });
            });
        }
    }



    // modules: Array(1)
    // 0:
    // id: 308
    // title: "English Marathon"



    //LANGUAGE SETTINGS

    const ukrLang = document.getElementById('ukrainian');
    const enLang = document.getElementById('english');
    const language = localStorage.getItem("language")

    if (language != null) {
        changeLanguage(language)
        if (ukrLang != null && language === "ukrainian") {
            ukrLang.checked = true
        } else if (enLang != null) {
            enLang.checked = true
        }
    } else {
        enLang.checked = true
    }

    if (ukrLang != null) {
        ukrLang.onchange = function() {
            localStorage.setItem("language", "ukrainian");
            changeLanguage("ukrainian");
        }
    }

    if (enLang != null) {
        enLang.onchange = function() {
            localStorage.setItem("language", "english");
            changeLanguage("english");
        }
    }




    function changeLanguage(language) {
        const ukrTexts = document.querySelectorAll('.ukrainian');
        const enTexts = document.querySelectorAll('.english');

        let ukrDisplay = language === "english" ? "none" : "block"
        let engDisplay = language === "english" ? "block" : "none"

        ukrTexts.forEach(function(element) {
            element.style.display = ukrDisplay;
        });

        enTexts.forEach(function(element) {
            element.style.display = engDisplay;
        });
    }


}