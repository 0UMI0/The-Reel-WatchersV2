//The img blur or something 
const images = document.querySelectorAll('.gallery-img');
let selectedImage = null;

// Add event listener to all images
images.forEach(image => {
    // Add click event listener to select image
    image.addEventListener('click', () => {
        // Remove highlight class from previously selected image
        if (selectedImage) {
            selectedImage.classList.remove('highlight');
        }
        // Add highlight class to newly selected image
        selectedImage = image;
        selectedImage.classList.add('highlight');
    });

    // Add hover event listener to highlight image
    image.addEventListener('mouseover', () => {
        // Add highlight class to image if it's not selected
        if (selectedImage !== image) {
            image.classList.add('hover');
        }
    });

    // Add hover event listener to remove highlight
    image.addEventListener('mouseout', () => {
        // Remove highlight class from image if it's not selected
        if (selectedImage !== image) {
            image.classList.remove('hover');
        }
    });

    // Add event listener to blur images that are not hovered
    image.addEventListener('mouseout', () => {
        if (selectedImage !== image) {
            image.classList.add('blur');
        }
    });
    image.addEventListener('mouseover', () => {
        image.classList.remove('blur');
    });
});