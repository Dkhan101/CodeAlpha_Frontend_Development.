// script.js

let currentImage = 0;
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImage = index;
        updateGallery();
    });
});

prevButton.addEventListener('click', () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    updateGallery();
});

nextButton.addEventListener('click', () => {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    updateGallery();
});

function updateGallery() {
    images.forEach((image) => {
        image.style.display = 'none';
    });
    images[currentImage].style.display = 'block';
}