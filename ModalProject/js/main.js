const modalBox = document.getElementById('modal-box');
const showModal = document.getElementById('show-modal-button');
const hideModal = document.getElementById('hide-modal-button');
const overlay = document.getElementById('overlay');

let topB = 50;
let leftB = 50;

function show() {
    modalBox.classList.remove('hidden');
    overlay.classList.remove('hidden');

    showModal.classList.add('hidden');
}

function hide() {
    modalBox.classList.add('hidden');
    overlay.classList.add('hidden');

    showModal.classList.remove('hidden');
}

showModal.addEventListener('click', () => show());

hideModal.addEventListener('click', () => hide());

overlay.addEventListener('click', () => hide());

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hide();
    }

    console.log(e.key);

    if (e.key === "ArrowUp" && topB > 30) {
        topB -= 4;
        modalBox.style.top = topB + "%";
    }

    if (e.key === "ArrowDown" && topB < 70) {
        topB += 4;
        modalBox.style.top = topB + "%";
    }

    if (e.key === "ArrowLeft" && leftB > 30) {
        leftB -= 4;
        modalBox.style.left = leftB + "%";
    }

    if (e.key === "ArrowRight" && leftB < 70) {
        leftB += 4;
        modalBox.style.left = leftB + "%";
    }
});
