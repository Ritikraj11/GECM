

function scrollToDiv() {
    document.getElementById("first").scrollIntoView({ behavior: "smooth" });
}


 const nav_button=document.getElementById('nav-button')
 const sidebar=document.getElementById('nav-item')


 nav_button.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });

