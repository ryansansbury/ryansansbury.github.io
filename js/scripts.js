// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.querySelector('.navbar-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navbarLinks.classList.toggle('active');
});

$(document).ready(function(){
    $('.social-buttons').slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
