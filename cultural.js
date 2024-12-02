

function scrollToDiv() {
    document.getElementById("first").scrollIntoView({ behavior: "smooth" });
}

function scrollToDivdance() {
    document.getElementById("dance").scrollIntoView({ behavior: "smooth" });
}

function scrollToDivpoetry() {
    document.getElementById("poetry").scrollIntoView({ behavior: "smooth" });
}

function scrollToDivphotography() {
    document.getElementById("photography").scrollIntoView({ behavior: "smooth" });
}
function scrollToDivdrama() {
    document.getElementById("drama").scrollIntoView({ behavior: "smooth" });
}
function scrollToDivscience() {
    document.getElementById("science").scrollIntoView({ behavior: "smooth" });
}
function scrollToDivpolitics() {
    document.getElementById("politics").scrollIntoView({ behavior: "smooth" });
}




















 

 const button3 = document.getElementById('dance-club-button');
 const newContent3 = document.getElementById('dance-content');

 // Add an event listener to the button
 button3.addEventListener('click', function() {
     // Display the new content
     newContent3.style.display = 'block';
 });
 
 const button4 = document.getElementById('poetry-club-button');
 const newContent4 = document.getElementById('poetry-content');

 // Add an event listener to the button
 button4.addEventListener('click', function() {
     // Display the new content
     newContent4.style.display = 'block';
 });

 const button5 = document.getElementById('photography-club-button');
 const newContent5 = document.getElementById('photography-content');

 // Add an event listener to the button
 button5.addEventListener('click', function() {
     // Display the new content
     newContent5.style.display = 'block';
 });

 const button6 = document.getElementById('drama-club-button');
 const newContent6 = document.getElementById('drama-content');

 // Add an event listener to the button
 button6.addEventListener('click', function() {
     // Display the new content
     newContent6.style.display = 'block';
 });

 const button7 = document.getElementById('science-club-button');
 const newContent7 = document.getElementById('science-content');

 // Add an event listener to the button
 button7.addEventListener('click', function() {
     // Display the new content
     newContent7.style.display = 'block';
 });

 const button8 = document.getElementById('politics-club-button');
 const newContent8 = document.getElementById('politics-content');

 // Add an event listener to the button
 button8.addEventListener('click', function() {
     // Display the new content
     newContent8.style.display = 'block';
 });

 const button9 = document.getElementById('coding-club-button');
 const newContent9 = document.getElementById('coding-content');

 // Add an event listener to the button
 button9.addEventListener('click', function() {
     // Display the new content
     newContent9.style.display = 'block';
 });


 const nav_button=document.getElementById('nav-button')
 const sidebar=document.getElementById('nav-item')


 nav_button.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });

