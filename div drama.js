function scrollToDivdrama() {
    document.getElementById("drama").scrollIntoView({ behavior: "smooth" });
}




const button = document.getElementById('drama-club-button');
 const newContent = document.getElementById('drama-content');
 const closeBtn = document.getElementById('close-drama-content');
 
 button.addEventListener('click', function() {
     newContent.style.display = 'block';
 });
 
 closeBtn.addEventListener('click', function() {
     newContent.style.display = 'none';
 });




 document.getElementById('show-images-button-drama').addEventListener('click', function () {
    const dramaDiv = document.getElementById('drama');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (document.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGallerydrama = document.createElement('div');
    fullscreenGallerydrama.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButtondrama = document.createElement('button');
    closeButtondrama.textContent = '✖ Close';
    closeButtondrama.classList.add('close-gallery-button-drama');

    // Add click event to close the gallery
    closeButtondrama.addEventListener('click', function () {
        dramaDiv.removeChild(fullscreenGallerydrama);
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
        const imgdrama = document.createElement('img');
        imgdrama.src = path; // Set the source path
        imgdrama.classList.add('drama-image');
        imgdrama.alt = `drama Image ${index + 1}`; // Alt text for accessibility
        fullscreenGallerydrama.appendChild(imgdrama);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGallerydrama.appendChild(closeButtondrama);

    // Append the fullscreen gallery to the drama div
    dramaDiv.appendChild(fullscreenGallerydrama);
});
