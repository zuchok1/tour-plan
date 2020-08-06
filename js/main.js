// Mobile-navbar
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  document
    .querySelector('.navbar')
    .classList.toggle('navbar_visible');
});


// Slider (hotel)
const mySwiper = new Swiper('.hotel-grid__swiper-container', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-grid__swiper-button_next',
    prevEl: '.hotel-grid__swiper-button_prev',
  },
})

// Modal
const modalBooking = document.querySelector('#modalBooking');

document.querySelector('#modalBookingOpen').addEventListener('click', () => {
  modalBooking.style.visibility = 'visible';
  modalBooking.style.opacity = '1';
});

function modalClose() {
  modalBooking.style.visibility = 'hidden';
  modalBooking.style.opacity = '0';
};

document.querySelector('#modalBookingClose').addEventListener('click', (e) => {
  e.preventDefault();
  modalClose();
});

addEventListener('keydown', e => e.key === 'Escape' && modalClose());

// Map

document.querySelector('.map__preloader').addEventListener('mouseenter', () => {
  document.querySelector('.map').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31608.153640525412!2d98.27942255114789!3d7.996953176476688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305039f77c82826f%3A0xacc83aa6f90754f6!2sHilton%20Garden%20Inn%20Phuket%20Bang%20Tao!5e0!3m2!1sru!2sru!4v1596567498649!5m2!1sru!2sru" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
});

// Slider (reviews)
const mySwiperReviews = new Swiper('.reviews__swiper', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-button_next',
    prevEl: '.reviews__swiper-button_prev',
  },
})

// Mobile vh modal fix
let vh = window.innerHeight * 0.01;
const modal = document.querySelector('.modal');
modal.style.setProperty('--vh', `${vh}px`);