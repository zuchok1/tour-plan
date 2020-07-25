// Slider (hotel)
var mySwiper = new Swiper('.hotel-grid__swiper-container', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: 'fade',

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-grid__swiper-button_next',
    prevEl: '.hotel-grid__swiper-button_prev',
  },
})


// Map
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.9085, 98.3068],
    zoom: 12
  }, {
    searchControlProvider: 'yandex#search'
  });

  myMap.geoObjects
    .add(new ymaps.Placemark([7.9085, 98.3068], {
      balloonContent: 'Grand Hilton Hotel'
    }));
}


// Slider (reviews)
var mySwiper = new Swiper('.reviews__swiper', {
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