const checkbox = document.getElementById('sports');
const textbox = document.getElementById('textbox');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        textbox.style.display = 'inline'; // Show textbox
    } else {
        textbox.style.display = 'none'; // Hide textbox
    }
});