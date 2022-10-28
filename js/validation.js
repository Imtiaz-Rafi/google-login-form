let signUpForm = document.forms.signUpForm;
let mailText = document.querySelector("#mail-text");
let passText = document.querySelector("#pass-text");
let fnameError = document.querySelector("#fname-error");
let lnameError = document.querySelector("#lname-error");
let mailError = document.querySelector("#mail-error");
let passError = document.querySelector("#pass-error");
let conPassError = document.querySelector("#conpass-error");
let token = true;

let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let conPass = document.querySelector("#conpass");
let icon = `<svg
        aria-hidden="true"
        class="stUf5b qpSchb"
        fill="currentColor"
        focusable="false"
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        xmlns="https://www.w3.org/2000/svg"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
    </svg>`;
signUpForm.onsubmit = function () {
    if (!fname.value && !lname.value) {
        fname.classList.add("error");
        lname.classList.add("error");
        fnameError.classList.add("err-txt");
        fnameError.innerHTML = icon + `<p>Enter first & last names</p>`;
    } else {
        if (!fname.value) {
            fname.classList.add("error");
            fnameError.classList.add("err-txt");
            fnameError.innerHTML = icon + `<p>Enter first name</p>`;
            token = false;
        } else {
            fname.classList.remove("error");
            fnameError.innerHTML = "";
        }
        if (!lname.value) {
            lname.classList.add("error");
            lnameError.classList.add("err-txt");
            lnameError.innerHTML = icon + `<p>Enter last name</p>`;
            token = false;
        } else {
            lname.classList.remove("error");
            lnameError.innerHTML = "";
        }
    }
    // EMAIL
    if (!email.value) {
        email.classList.add("error");
        mailError.classList.add("err-txt");
        mailError.innerHTML = icon + `<p>Choose a Gmail address</p>`;
        mailText.innerHTML = "";
        mailText.classList.remove("info-text");
        token = false;
    } else {
        // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/;
        if (!email.value.match(validRegex)) {
            email.classList.add("error");
            mailError.classList.add("err-txt");
            mailError.innerHTML = icon + `<p>Invalid Gmail address</p>`;
            mailText.innerHTML = "";
            mailText.classList.remove("info-text");
            token = false;
        } else {
            email.classList.remove("error");
            mailError.innerHTML = "";
        }
    }
    // PASSWORD
    if (!pass.value) {
        pass.classList.add("error");
        passError.classList.add("err-txt");
        passError.innerHTML = icon + `<span>Enter a password</span>`;
        passText.innerHTML = "";
        token = false;
    } else {
        passText.innerHTML = "";
        passText.classList.remove("info-text");
        // Confirm Password
        if (!conPass.value) {
            conPass.classList.add("error");
            conPassError.classList.add("err-txt");
            conPassError.innerHTML =
                icon + `<span>Enter confirm password</span>`;
            pass.classList.remove("error");
            passError.innerHTML = "";
            token = false;
        } else {
            if (pass.value != conPass.value) {
                pass.classList.add("error");
                conPass.classList.add("error");
                passError.classList.add("err-txt");
                passError.innerHTML =
                    icon +
                    `<span>Those passwords didn’t match. Try again.</span>`;
                conPassError.innerHTML = "";
                token = false;
            } else {
                pass.classList.remove("error");
                conPass.classList.remove("error");
                passError.innerHTML = "";
                conPassError.innerHTML = "";
            }
        }
    }

    if (token === false) {
        return false;
    } else {
        var user = localStorage.setItem("name", fname.value + lname.value);
        var mail = localStorage.setItem("mail", email.value);
        var pswd = localStorage.setItem("password", pass.value);
        return true;
    }
};