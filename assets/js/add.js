// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow_hidden")
}, 3000)
  
  
eye2.addEventListener("click", function () {

    if (password.value.length < 1, password.type == "password") {
        password.setAttribute("type", "text");
        eye2.classList.add("d-none");
        eye.classList.add("d-block");
        eye2.classList.remove("d-block");
        eye.classList.remove("d-none");
    } else if (password.value.length > 1, password.type == "text") {
        password.setAttribute("type", "password");
        eye2.classList.add("d-block");
        eye.classList.add("d-none");
        eye2.classList.remove("d-none");
        eye.classList.remove("d-block");

    }
});
eye.addEventListener("click", function () {
    if (password.value.length < 1, password.type == "password") {
        password.setAttribute("type", "text");
        eye2.classList.add("d-none");
        eye.classList.add("d-block");
        eye2.classList.remove("d-block");
        eye.classList.remove("d-none");
    } else if (password.value.length > 1, password.type == "text") {
        password.setAttribute("type", "password");
        eye2.classList.add("d-block");
        eye.classList.add("d-none");
        eye2.classList.remove("d-none");
        eye.classList.remove("d-block");
    }
});

 