var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("main-nav--closed");
  navMain.classList.toggle("main-nav--opened");
});

var btnBuy = document.querySelectorAll(".button-buy");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal__overlay");

Array.from(btnBuy).forEach(linkBuy => {
  linkBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--active");
  })
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    if (modal.classList.contains("modal--active")) {
      evt.preventDefault();
      modal.classList.remove("modal--active");
    }
  }
});

modalOverlay.addEventListener("click", function () {
  if (modal.classList.contains("modal--active")) {
    modal.classList.remove("modal--active");
  }
})


ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [59.93863506417266, 30.323117499999945],
    zoom: 16
  }, {
    searchControlProvider: "yandex#search"
  }),

    myPlacemark = new ymaps.Placemark([59.938615082985, 30.32293205597093], {
      hintContent: "Интернет-магазин Mishka",
      balloonContent: "Интернет-магазин Mishka, ул. Большая Конюшенная, д.19/8, офис 101"
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "img/icon-map-pin.svg",
      // Размеры метки.
      iconImageSize: [67, 100],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-20, -100]
    })

  myMap.geoObjects
    .add(myPlacemark)
});
