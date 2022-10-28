let mailForm = document.forms.mailForm;

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

mailForm.onsubmit = function () {
    let token = true;
    let mailError = document.querySelector("#mail-error");
    let email = document.querySelector("#email");

    // EMAIL
    if (!email.value) {
        email.classList.add("error");
        mailError.classList.add("err-txt");
        mailError.innerHTML = icon + `<p>Choose a Gmail address</p>`;
        token = false;
    } else {
        // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/;
        if (!email.value.match(validRegex)) {
            email.classList.add("error");
            mailError.classList.add("err-txt");
            mailError.innerHTML = icon + `<p>Invalid Gmail address</p>`;
            token = false;
        } else {
            email.classList.remove("error");
            mailError.innerHTML = "";
        }
    }
    if (token === false) {
        return false;
    } else {
        // Email varification
        let validMail = localStorage.getItem("mail");
        if(validMail===email.value){
            return true;
        }else{
            email.classList.add("error");
            mailError.classList.add("err-txt");
            mailError.innerHTML = icon + `<p>Couldn't find your Google Account</p>`;
            return false;
        }
    }
};
