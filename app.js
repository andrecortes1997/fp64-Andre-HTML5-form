const togglePassword = document.querySelector("#togglePassword");
const exampleInputPassword2 = document.querySelector("#exampleInputPassword2");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = exampleInputPassword2.getAttribute("type") === "password" ? "text" : "password";
    exampleInputPassword2.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye-fill");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});