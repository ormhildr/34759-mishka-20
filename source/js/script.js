var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var btnBuy = document.querySelectorAll(".button-buy");
var modal = document.querySelector(".modal");

Array.from(btnBuy).forEach(linkbuy => {
  linkbuy.addEventListener("click", function (evt) {
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

modal.addEventListener("click", function () {
  event.stopPropagation();
  modal.classList.remove("modal--active");
})
