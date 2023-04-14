const formAl = document.querySelector(".login-form");

function checkSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password},
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Будь ласка, заповніть всі поля");
    }
   
    const result = { email: email.value, password: password.value };
    console.log(result);
    event.currentTarget.reset();

}  
formAl.addEventListener("submit", checkSubmit);