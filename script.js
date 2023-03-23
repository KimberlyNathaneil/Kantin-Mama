navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    profile.classList.remove('active');
}

var Swiper = require('swiper');
   $(document).ready(() => {
      var swiper = new Swiper('.hero-slider', {
        pagination: {
          el: '.swiper-pagination',
        }
      });
    });