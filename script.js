function validatePass(e) {
    if(passInput.value !== confPassInput.value) {
        confPassInput.classList.add('mismatch');
    } else if (passInput.value == confPassInput.value) {
        confPassInput.classList.remove('mismatch');
    }
}

const submitBtn = document.querySelector("button[type='submit'");

const passInput = document.getElementById("password");
const confPassInput = document.getElementById("conf-password");

submitBtn.addEventListener('click', e => {
    if (passInput.value !== confPassInput.value) {
        confPassInput.setCustomValidity('Passwords do not match');
    }
});