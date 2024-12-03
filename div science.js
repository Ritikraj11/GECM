function scrollToDivscience() {
    document.getElementById("science").scrollIntoView({ behavior: "smooth" });
}

const button7 = document.getElementById('science-club-button');
const newContent7 = document.getElementById('science-content');

// Add an event listener to the button
button7.addEventListener('click', function() {
    // Display the new content
    newContent7.style.display = 'block';
});


document.getElementById('show-images-button-science').addEventListener('click', function () {
    const scienceDiv = document.getElementById('science');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (document.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGalleryscience = document.createElement('div');
    fullscreenGalleryscience.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButtonscience = document.createElement('button');
    closeButtonscience.textContent = '✖ Close';
    closeButtonscience.classList.add('close-gallery-button-science');

    // Add click event to close the gallery
    closeButtonscience.addEventListener('click', function () {
        scienceDiv.removeChild(fullscreenGalleryscience);
    });

    // Define the paths to your images
    const imagePaths = [
        'images/image1.jpg', // Replace with the actual path to your images
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg'
    ];

    // Add images to the fullscreen gallery
    imagePaths.forEach((path, index) => {
        const imgscience = document.createElement('img');
        imgscience.src = path; // Set the source path
        imgscience.classList.add('science-image');
        imgscience.alt = `science Image ${index + 1}`; // Alt text for accessibility
        fullscreenGalleryscience.appendChild(imgscience);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGalleryscience.appendChild(closeButtonscience);

    // Append the fullscreen gallery to the science div
    scienceDiv.appendChild(fullscreenGalleryscience);
});
