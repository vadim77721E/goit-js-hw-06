const widthInput = document.querySelector('#validation-input');

widthInput.addEventListener('blur', event => {
    if (
        event.currentTarget.value.length ===
        Number(event.currentTarget.dataset.length)
    ) {
        widthInput.classList.add('valid');
        widthInput.classList.remove('invalid');
    } else {
        widthInput.classList.add('invalid');
        widthInput.classList.add('valid');

    }
});