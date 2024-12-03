function scrollToDivpolitics() {
    document.getElementById("politics").scrollIntoView({ behavior: "smooth" });
}

const button8 = document.getElementById('politics-club-button');
 const newContent8 = document.getElementById('politics-content');

 // Add an event listener to the button
 button8.addEventListener('click', function() {
     // Display the new content
     newContent8.style.display = 'block';
 });



 document.getElementById('show-images-button-politics').addEventListener('click', function () {
    const politicsDiv = document.getElementById('politics');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (document.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGallerypolitics = document.createElement('div');
    fullscreenGallerypolitics.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButtonpolitics = document.createElement('button');
    closeButtonpolitics.textContent = '✖ Close';
    closeButtonpolitics.classList.add('close-gallery-button-politics');

    // Add click event to close the gallery
    closeButtonpolitics.addEventListener('click', function () {
        politicsDiv.removeChild(fullscreenGallerypolitics);
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
        const imgpolitics = document.createElement('img');
        imgpolitics.src = path; // Set the source path
        imgpolitics.classList.add('politics-image');
        imgpolitics.alt = `politics Image ${index + 1}`; // Alt text for accessibility
        fullscreenGallerypolitics.appendChild(imgpolitics);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGallerypolitics.appendChild(closeButtonpolitics);

    // Append the fullscreen gallery to the politics div
    politicsDiv.appendChild(fullscreenGallerypolitics);
});
