"use strict";

var menu = document.querySelector(".site-list"),
    item = document.querySelectorAll(".site-list__item"),
    btnOpen = document.querySelector(".main-nav__toggle");
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
var containerTwo = document.querySelector(".slider__container-two"),
    containerOne = document.querySelector(".slider__container-one"),
    image = document.querySelector(".slider__image--centering"); // Ползунок/переключатель

var circle = document.querySelector(".slider__toggle"),
    line = document.querySelector(".slider__line"); // Разрешения экранов

var mobileWidth = 320,
    tableWidth = 768,
    desktopWidth = 1220,
    browser = document.body.clientWidth; //Слайдер для мобильной версии

if (browser >= mobileWidth && browser < tableWidth) {
  var imageWrapper = document.querySelector(".slider__slides");
  line.addEventListener("click", function (e) {
    circle.classList.toggle("toggle--on");
    imageWrapper.classList.toggle("image-wrapper--move");
  });
} //Изменение стилей


function changeStyle(rangeValue) {
  circle.style.transform = "translateX(".concat(rangeValue, "px)");
  var indexWidth = rangeValue * image.offsetWidth / line.offsetWidth;
  image.style.transform = "translateX(-".concat(image.offsetWidth - indexWidth, "px)");
  containerOne.style.width = indexWidth + "px";
  containerOne.style.transform = "translateX(".concat(image.offsetWidth - indexWidth, "px)");
  containerTwo.style.width = "".concat(image.offsetWidth - indexWidth, "px"); //Изменение фона

  var bgSlider = document.querySelector(".example"),
      bgWidthOffset = (circle.getBoundingClientRect().right - circle.clientWidth / 2) / browser * 100;
  var coefficient = rangeValue * 0.00106 + 0.78;
  bgSlider.style.backgroundImage = "linear-gradient(#ffffff 190px, transparent 190px, transparent 100%),\nlinear-gradient(90deg, transparent 0%, transparent ".concat(bgWidthOffset * coefficient, "%, #eaeaea ").concat(bgWidthOffset * coefficient, "%, #eaeaea 100%)");
} //Слайдер для десктопной версии


if (browser >= desktopWidth) {
  changeStyle(205);

  circle.onmousedown = function (e) {
    e.preventDefault();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(e) {
      moveAt(e.pageX);
    }

    ;

    function moveAt(pageX) {
      var right = line.getBoundingClientRect().right,
          left = line.getBoundingClientRect().left;
      var range = pageX - left;

      if (range >= 0 && range <= right - left) {
        changeStyle(range);
      }

      ;
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
}
//# sourceMappingURL=app.js.map
