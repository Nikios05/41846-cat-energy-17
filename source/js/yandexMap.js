ymaps.ready(function () {
  let browser = document.body.clientWidth;
  let mapX = 59.938631,
      mapY = 30.323055;

  if (browser > 1220) {
    mapX = 59.938785;
    mapY = 30.321400;
  }

  var myMap = new ymaps.Map('yandex-map', {
          center: [mapX, mapY],
          zoom: 18
      }, {
          searchControlProvider: 'yandex#search'
      }),

  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'ул. Большая Конюшенная, д. 19/8'
  }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin.png',
      iconImageSize: [102, 90],
      iconImageOffset: [-46, -102]
  });

  myMap.geoObjects
      .add(myPlacemark);
});
