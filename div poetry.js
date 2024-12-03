function scrollToDivpoetry() {
    document.getElementById("poetry").scrollIntoView({ behavior: "smooth" });
}

const button4 = document.getElementById('poetry-club-button');
 const newContent4 = document.getElementById('poetry-content');

 // Add an event listener to the button
 button4.addEventListener('click', function() {
     // Display the new content
     newContent4.style.display = 'block';
 });

 document.getElementById('show-images-button-poetry').addEventListener('click', function () {
    const poetryDiv = document.getElementById('poetry');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (document.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGallerypoetry = document.createElement('div');
    fullscreenGallerypoetry.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButtonpoetry = document.createElement('button');
    closeButtonpoetry.textContent = '✖ Close';
    closeButtonpoetry.classList.add('close-gallery-button-poetry');

    // Add click event to close the gallery
    closeButtonpoetry.addEventListener('click', function () {
        poetryDiv.removeChild(fullscreenGallerypoetry);
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
        const imgpoetry = document.createElement('img');
        imgpoetry.src = path; // Set the source path
        imgpoetry.classList.add('poetry-image');
        imgpoetry.alt = `poetry Image ${index + 1}`; // Alt text for accessibility
        fullscreenGallerypoetry.appendChild(imgpoetry);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGallerypoetry.appendChild(closeButtonpoetry);

    // Append the fullscreen gallery to the poetry div
    poetryDiv.appendChild(fullscreenGallerypoetry);
});
