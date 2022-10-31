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
