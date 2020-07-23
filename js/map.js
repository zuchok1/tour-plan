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