function isActive() {
    var inputBox = document.querySelectorAll(".input");
    inputBox.forEach((e) => {
        if (e.value) {
            e.parentElement.classList.add("active");
        } else {
            e.parentElement.classList.remove("active");
        }
        // e.classList.add("active");
    });
}
isActive();
var signUpForm = document.forms.signUpForm;
var mailText = document.querySelector("#mail-text");
var passText = document.querySelector("#pass-text");
var fnameError = document.querySelector("#fname-error");
var lnameError = document.querySelector("#lname-error");
var mailError = document.querySelector("#mail-error");
var passError = document.querySelector("#pass-error");
var conPassError = document.querySelector("#conpass-error");
var token = true;
signUpForm.onsubmit = function () {
    if (!signUpForm.fname.value && !signUpForm.lname.value) {
        signUpForm.fname.classList.add("error");
        signUpForm.lname.classList.add("error");
        fnameError.innerHTML = "Enter first & last names";
    } else {
        if (!signUpForm.fname.value) {
            signUpForm.fname.classList.add("error");
            fnameError.innerHTML = "Enter first name";
            token = 1;
        } else {
            signUpForm.fname.classList.remove("error");
            fnameError.innerHTML = "";
        }
        if (!signUpForm.lname.value) {
            signUpForm.lname.classList.add("error");
            lnameError.innerHTML = "Enter last name";
            token = 1;
        } else {
            signUpForm.lname.classList.remove("error");
            lnameError.innerHTML = "";
        }
    }
    // EMAIL
    if (!signUpForm.email.value) {
        signUpForm.email.classList.add("error");
        mailError.innerHTML = "Choose a Gmail address";
        mailText.innerHTML = "";
        token = 1;
    } else {
        // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/;
        if (!signUpForm.email.value.match(validRegex)) {
            signUpForm.email.classList.add("error");
            mailError.innerHTML = "Invalid Gmail address";
            mailText.innerHTML = "";
            token = 1;
        } else {
            signUpForm.email.classList.remove("error");
            mailError.innerHTML = "";
        }
    }
    // PASSWORD
    if (!signUpForm.pass.value) {
        signUpForm.pass.classList.add("error");
        passError.innerHTML = "Enter a password";
        passText.innerHTML = "";
        token = 1;
    } else {
        passText.innerHTML = "";
        if (!signUpForm.conpass.value) {
            signUpForm.conpass.classList.add("error");
            conPassError.innerHTML = "Enter confirm password";
            signUpForm.pass.classList.remove("error");
            passError.innerHTML = "";
            token = 1;
        } else {
            if (signUpForm.pass.value != signUpForm.conpass.value) {
                signUpForm.pass.classList.add("error");
                signUpForm.conpass.classList.add("error");
                passError.innerHTML =
                    "Those passwords didn’t match. Try again.";
                conPassError.innerHTML = "";
                token = 1;
            } else {
                signUpForm.pass.classList.remove("error");
                signUpForm.conpass.classList.remove("error");
                passError.innerHTML = "";
                conPassError.innerHTML = "";
            }
        }
    }

    if (token == 1) {
        return false;
    }
};

