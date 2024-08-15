const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.list ul');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});