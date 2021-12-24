const startView = document.getElementById('startView');
const nextView = document.getElementById('nextView');

const eKey = document.getElementById('e-key');
const eKeyCode = document.getElementById('e-key-code');
const eCode = document.getElementById('e-code');


document.addEventListener('keydown', (e) => {
    showNextView();
    writeInfo(e);
});

function showNextView() {
    startView.classList.add('hidden');
    nextView.classList.remove('hidden');
}

function writeInfo(e) {
    eKey.textContent = e.key;
    eKeyCode.textContent = e.keyCode;
    eCode.textContent = e.code;
}