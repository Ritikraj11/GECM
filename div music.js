function scrollToDivmusic() {
    document.getElementById("music").scrollIntoView({ behavior: "smooth" });
}

const button2 = document.getElementById('music-club-button');
 const newContent2 = document.getElementById('music-content');

 // Add an event listener to the button
 button2.addEventListener('click', function() {
     // Display the new content
     newContent2.style.display = 'block';
 });



 // Event listener for the "Show More Info" button to toggle visibility of content
// Event listener for the "Show Gallery" button to trigger roll animation and display images
document.getElementById('show-images-button-music').addEventListener('click', function () {
    const musicDiv = document.getElementById('music');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (document.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGallerymusic = document.createElement('div');
    fullscreenGallerymusic.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButtonmusic = document.createElement('button');
    closeButtonmusic.textContent = '✖ Close';
    closeButtonmusic.classList.add('close-gallery-button-music');

    // Add click event to close the gallery
    closeButtonmusic.addEventListener('click', function () {
        musicDiv.removeChild(fullscreenGallerymusic);
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
        const imgmusic = document.createElement('img');
        imgmusic.src = path; // Set the source path
        imgmusic.classList.add('music-image');
        imgmusic.alt = `music Image ${index + 1}`; // Alt text for accessibility
        fullscreenGallerymusic.appendChild(imgmusic);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGallerymusic.appendChild(closeButtonmusic);

    // Append the fullscreen gallery to the music div
    musicDiv.appendChild(fullscreenGallerymusic);
});

