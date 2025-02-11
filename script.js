// script.js
document.getElementById('open-btn').addEventListener('click', function() {
    const flap = document.getElementById('flap');
    const envelopeBody = document.querySelector('.envelope-body');

    // Open the flap with animation
    flap.style.transform = 'rotateX(180deg)';

    // Show the ecard image after flap opens
    setTimeout(function() {
        envelopeBody.style.display = 'block';
    }, 500); // Wait for the flap to rotate before showing the image
});
