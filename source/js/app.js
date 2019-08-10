"use strict";

var menu = document.querySelector(".site-list");
var item = document.querySelectorAll(".site-list__item");
var btnOpen = document.querySelector(".main-nav__toggle");
btnOpen.addEventListener("click", function () {
  console.log("ok");
  btnOpen.classList.toggle("main-nav__toggle--close");
  menu.classList.toggle("site-list--on");
  item.forEach(function (i) {
    i.classList.toggle("site-list__item--on");
  });
});
"use strict";

//Контейнеры с ихображениями и центровщик контента
var containerTwo = document.querySelector(".slider__container-two");
var containerOne = document.querySelector(".slider__container-one");
var image = document.querySelector(".slider__image--centering"); // Ползунок/переключатель

var circle = document.querySelector(".slider__toggle");
var line = document.querySelector(".slider__line"); // Разрешения экранов

var mobileWidth = 320;
var tableWidth = 768;
var desktopWidth = 1220;
var browser = document.body.clientWidth; //Слайдер для мобильной версии

if (browser >= mobileWidth && browser < tableWidth) {
  var imageWrapper = document.querySelector(".slider__slides");
  line.addEventListener("click", function (e) {
    circle.classList.toggle("toggle--on");
    imageWrapper.classList.toggle("image-wrapper--move");
  });
}

; //Изменение стилей

function changeStyle(rangeValue, fixTab) {
  circle.style.transform = "translateX(".concat(rangeValue, "px)");
  var indexWidth = rangeValue * image.offsetWidth / line.offsetWidth + fixTab;
  image.style.transform = "translateX(-".concat(image.offsetWidth - indexWidth, "px)");
  containerOne.style.width = indexWidth + "px";
  containerOne.style.transform = "translateX(".concat(image.offsetWidth - indexWidth, "px)");
  containerTwo.style.width = "".concat(image.offsetWidth - indexWidth, "px"); //Изменение фона

  var bgSlider = document.querySelector(".example");
  var bgWidthOffset = (circle.getBoundingClientRect().right - circle.clientWidth / 2) / browser * 100;
  var coefficient = rangeValue * 0.00106 + 0.78; //фикс для широких экранов

  if (rangeValue > line.offsetWidth - 5) {
    coefficient = 100;
  }

  if (browser >= desktopWidth) {
    bgSlider.style.backgroundImage = "linear-gradient(#ffffff 190px, transparent 190px, transparent 100%),\n    linear-gradient(90deg, transparent 0%, transparent ".concat(bgWidthOffset * coefficient, "%, #eaeaea ").concat(bgWidthOffset * coefficient, "%, #eaeaea 100%)");
  }

  if (browser >= tableWidth && browser < desktopWidth) {
    if (rangeValue < line.offsetWidth - (line.offsetWidth - 5)) {
      coefficient = 0;
    }

    ;
    bgSlider.style.backgroundImage = "linear-gradient(#ffffff 575px, transparent 575px, transparent 100%),\n    linear-gradient(90deg, transparent 0%, transparent ".concat(bgWidthOffset * coefficient, "%, #eaeaea ").concat(bgWidthOffset * coefficient, "%, #eaeaea 100%)");
  }
} //Начальное состояние
//Функция изминения


function moveAt(pageX, fixTab) {
  var right = line.getBoundingClientRect().right,
      left = line.getBoundingClientRect().left;
  var range = pageX - left;

  if (range >= 0 && range <= right - left) {
    changeStyle(range, fixTab);
  }

  ;
}

; //Слайдер для десктопной версии

if (browser >= desktopWidth) {
  changeStyle(205, 0);

  circle.onmousedown = function (e) {
    e.preventDefault();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(e) {
      moveAt(e.pageX, 0);
    }

    ;

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    circle.ondragstart = function () {
      return false;
    };
  };
} //Слайдер для таб версии


if (browser >= tableWidth && browser < desktopWidth) {
  changeStyle(205, 30);

  circle.ontouchstart = function (e) {
    e.preventDefault();
    document.addEventListener("touchmove", touchMove);
    document.addEventListener("touchend", touchEnd);

    function touchMove(e) {
      moveAt(e.changedTouches[0].pageX, 0);
    }

    ;

    function touchEnd() {
      document.removeEventListener("touchmove", touchMove);
      document.removeEventListener("touchend", touchEnd);
    }

    circle.ondragstart = function () {
      return false;
    };
  };
}
"use strict";

var catName = document.querySelector("[name='cat-name'");
var catWeight = document.querySelector("[name='cat-weight'");
var catAge = document.querySelector("[name='cat-age'");
var email = document.querySelector("[type='email'");
var phoneNumber = document.querySelector("[type='tel'");
var submit = document.querySelector(".form__submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("ok");
  var errorMessage = "";

  if (catWeight.value == "") {
    catWeight.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Поле имени обязательно для заполнения\n";
  } else if (catWeight.value > 25) {
    catWeight.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Если ваш кот столько весит, значит вы побили мировой рекорд\n";
  }

  if (catName.value == "") {
    catName.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Поле веса обязательно для заполнения\n";
  } else if (catName.value.length > 30) {
    catName.classList.add("form__text--invalid");
    errorMessage = errorMessage + "У вашего кота слишком длинное имя, может быть есть домашння кличка?\n";
  }

  if (email.value == "") {
    email.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Поле email обязательно для заполнения\n";
  }

  if (phoneNumber.value == "") {
    phoneNumber.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Поле номера телефона обязательно для заполнения\n";
  }

  alert(errorMessage);
});
//# sourceMappingURL=app.js.map
