const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
// console.log(toggleBtn);

const navLinks = document.getElementsByClassName('nav-links')[0];
// console.log(navLinks);

toggleBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})