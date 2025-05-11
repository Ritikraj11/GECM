
function scrollToDivcoding() {
    document.getElementById("coding").scrollIntoView({ behavior: "smooth" });
}



const button9 = document.getElementById('coding-club-button');
const newContent9 = document.getElementById('coding-content');
const closeBtn1 = document.getElementById('close-coding-content');

button9.addEventListener('click', function() {
    newContent9.style.display = 'block';
});

closeBtn1.addEventListener('click', function() {
    newContent9.style.display = 'none';
});


 document.getElementById('show-images-button-coding').addEventListener('click', function () {
    const codingDiv = document.getElementById('coding');

    // Check if a fullscreen gallery already exists (to prevent duplicates)
    if (document.querySelector('.fullscreen-gallery')) return;

    // Create the fullscreen gallery div
    const fullscreenGallerycoding = document.createElement('div');
    fullscreenGallerycoding.classList.add('fullscreen-gallery', 'scrollable-gallery');

    // Create a close button
    const closeButtoncoding = document.createElement('button');
    closeButtoncoding.textContent = '✖ Close';
    closeButtoncoding.classList.add('close-gallery-button-coding');

    // Add click event to close the gallery
    closeButtoncoding.addEventListener('click', function () {
        codingDiv.removeChild(fullscreenGallerycoding);
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
        const imgcoding = document.createElement('img');
        imgcoding.src = path; // Set the source path
        imgcoding.classList.add('coding-image');
        imgcoding.alt = `coding Image ${index + 1}`; // Alt text for accessibility
        fullscreenGallerycoding.appendChild(imgcoding);
    });

    // Append the close button to the fullscreen gallery
    fullscreenGallerycoding.appendChild(closeButtoncoding);

    // Append the fullscreen gallery to the coding div
    codingDiv.appendChild(fullscreenGallerycoding);
});


