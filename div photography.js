function scrollToDivphotography() {
    document.getElementById("photography").scrollIntoView({ behavior: "smooth" });
}

const button5 = document.getElementById('photography-club-button');
 const newContent5 = document.getElementById('photography-content');

 // Add an event listener to the button
 button5.addEventListener('click', function() {
     // Display the new content
     newContent5.style.display = 'block';
 }); 

 document.getElementById('show-images-button-photography').addEventListener('click', function () {
    const photographyDiv = document.getElementById('photography');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (document.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGalleryphotography = document.createElement('div');
    fullscreenGalleryphotography.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButtonphotography = document.createElement('button');
    closeButtonphotography.textContent = '✖ Close';
    closeButtonphotography.classList.add('close-gallery-button-photography');

    // Add click event to close the gallery
    closeButtonphotography.addEventListener('click', function () {
        photographyDiv.removeChild(fullscreenGalleryphotography);
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
        const imgphotography = document.createElement('img');
        imgphotography.src = path; // Set the source path
        imgphotography.classList.add('photography-image');
        imgphotography.alt = `photography Image ${index + 1}`; // Alt text for accessibility
        fullscreenGalleryphotography.appendChild(imgphotography);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGalleryphotography.appendChild(closeButtonphotography);

    // Append the fullscreen gallery to the photography div
    photographyDiv.appendChild(fullscreenGalleryphotography);
});
