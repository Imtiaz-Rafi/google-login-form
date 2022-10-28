function mailName() {
    let mail = document.querySelector("#mail-name");
    let validMail = localStorage.getItem("mail");
    mail.innerHTML = validMail;
}
mailName();
