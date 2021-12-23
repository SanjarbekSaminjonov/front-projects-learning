const modalBox = document.getElementById('modal-box');
const showModal = document.getElementById('show-modal-button');
const hideModal = document.getElementById('hide-modal-button');
const overlay = document.getElementById('overlay');


showModal.addEventListener('click', () => show());

hideModal.addEventListener('click', () => hide());

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hide();
    }
});

overlay.addEventListener('click', () => hide());

function show() {
    modalBox.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function hide() {
    modalBox.classList.add('hidden');
    overlay.classList.add('hidden');
}
