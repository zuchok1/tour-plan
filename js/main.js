var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },
})