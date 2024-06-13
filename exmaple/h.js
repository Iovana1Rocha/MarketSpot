const display = document.querySelector('.liters');
const addButton = document.querySelector('.btn[data-action="add"]');
const subtractButton = document.querySelector('.btn[data-action="subtract"]');

let liters = 0;

addButton.addEventListener('click', () => {
    liters++;
    display.textContent = liters + ' L';
});

subtractButton.addEventListener('click', () => {
    if (liters > 0) {
        liters--;
        display.textContent = liters + ' L';
    }
});
