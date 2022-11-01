function isActive() {
    let inputBox = document.querySelectorAll(".input");
    inputBox.forEach((e) => {
        if (e.value) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }
    });
}

let togglePass = true;
function showPass() {
    var pass = document.querySelector("#pass");
    var conPass = document.querySelector("#conpass");
    if (togglePass) {
        pass.type = "text";
        if (conPass) conPass.type = "text";
    } else {
        pass.type = "password";
        if (conPass) conPass.type = "password";
    }
    togglePass = !togglePass;
}
let togglePass2 = true;
function showPass2() {
    var pass = document.querySelector("#login-pass");
    if (togglePass2) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
    togglePass2 = !togglePass2;
}

function mailName() {
    let mail = document.querySelector("#mail-name");
    let validMail = localStorage.getItem("mail");
    mail.innerHTML = validMail;
}
