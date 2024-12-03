function scrollToDivdance() {
    document.getElementById("dance").scrollIntoView({ behavior: "smooth" });
}

const button3 = document.getElementById('dance-club-button');
 const newContent3 = document.getElementById('dance-content');

 // Add an event listener to the button
 button3.addEventListener('click', function() {
     // Display the new content
     newContent3.style.display = 'block';
 });


 
 document.getElementById('show-images-button-dance').addEventListener('click', function () {
    const danceDiv = document.getElementById('dance');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (danceDiv.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGallery = document.createElement('div');
    fullscreenGallery.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '✖ Close';
    closeButton.classList.add('close-gallery-button');

    // Add click event to close the gallery
    closeButton.addEventListener('click', function () {
        danceDiv.removeChild(fullscreenGallery);
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
        const img = document.createElement('img');
        img.src = path; // Set the source path
        img.classList.add('dance-image');
        img.alt = `Dance Image ${index + 1}`; // Alt text for accessibility
        fullscreenGallery.appendChild(img);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGallery.appendChild(closeButton);

    // Append the fullscreen gallery to the dance div
    danceDiv.appendChild(fullscreenGallery);
});
