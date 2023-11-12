const form = document.getElementById('myForm');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const emailError = document.getElementById('error-email');
const passError = document.getElementById('pass-error');
const btn = document.getElementById('login');
btn.addEventListener("click", (e)=> {
    e.preventDefault();
    if (email.value === ''|| email.value == null) {
        var paragraph = document.createElement('p');
        paragraph.innerText = "email required"
        emailError.appendChild(paragraph);
        paragraph.classList.add("error");
        setTimeout(() => {
            paragraph.remove();
        }, 4000);
    }
    if (pass.value === '' || pass.value == null) {
        var paragraph1 = document.createElement('p');
        paragraph1.innerText = "password required";
        passError.append(paragraph1);
        paragraph1.classList.add("error");
        setTimeout(() => {
            paragraph1.remove();
        }, 4000);
    }
})

