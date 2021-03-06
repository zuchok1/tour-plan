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
var bookButton = document.getElementsByClassName('modal-booking-open');


function modalOpen() {
  modalBooking.style.visibility = 'visible';
  modalBooking.style.opacity = '1';
};

function modalClose() {
  modalBooking.style.visibility = 'hidden';
  modalBooking.style.opacity = '0';
};

Array.from(bookButton).forEach(function (bookButton) {
  bookButton.addEventListener('click', modalOpen);
});

document.querySelector('.modal-booking-close').addEventListener('click', (e) => {
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

$(document).ready(function () {
  AOS.init();

  // Forms validation
  $('.phone-input').mask('+7 (000) 000-00-00');

  $('.modal__form').validate({
    errorClass: "invalid",
    messages: {
      bookName: {
        required: "Please specify your name",
        minlength: "Can't be shorter than 2 characters"
      },
      bookPhone: "Please enter your phone",
      bookEmail: {
        required: "We need your email address to contact you",
        email: "Enter in the format of name@domain.com"
      }
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Can't be shorter than 2 characters"
      },
      phone: "Please enter your phone",
    }
  });

  $('.newsletter__send').validate({
    errorClass: "invalid",
    messages: {
      newsletterEmail: {
        required: "Please enter email address",
        email: "Enter a valid email"
      }
    }
  });

});