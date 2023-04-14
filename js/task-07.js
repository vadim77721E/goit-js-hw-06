const fonInput = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');

textInput.style.fontSize = fonInput.value + 'px';

const textResizing = () => {
    textInput.style.fontSize = `${fonInput.value}px`;
};

fonInput.addEventListener('input', textResizing);