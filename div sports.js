// scroll to sports div
function scrollToDivsport() {
    document.getElementById("sports").scrollIntoView({ behavior: "smooth" });
}



const button1 = document.getElementById('sports-club-button');
 const newContent1 = document.getElementById('sports-content');

 // Add an event listener to the button
 button1.addEventListener('click', function() {
     // Display the new content
     newContent1.style.display = 'block';
 });

// Event listener for the "Show More Info" button to toggle visibility of content
// Event listener for the "Show Gallery" button to trigger roll animation and display images
document.getElementById('show-images-button-sports').addEventListener('click', function () {
    const sportsDiv = document.getElementById('sports');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (document.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGallery = document.createElement('div');
    fullscreenGallery.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '✖ Close';
    closeButton.classList.add('close-gallery-button');

    // Add click event to close the gallery
    closeButton.addEventListener('click', function () {
        sportsDiv.removeChild(fullscreenGallery);
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
        img.classList.add('sport-image');
        img.alt = `Sport Image ${index + 1}`; // Alt text for accessibility
        fullscreenGallery.appendChild(img);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGallery.appendChild(closeButton);

    // Append the fullscreen gallery to the sports div
    sportsDiv.appendChild(fullscreenGallery);
});
