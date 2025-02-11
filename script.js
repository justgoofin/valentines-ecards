function openCard() {
    const card = document.querySelector('.card');
    card.style.display = 'block';
    document.querySelector('.envelope').style.cursor = 'default'; // Disable clicking after opening
}
