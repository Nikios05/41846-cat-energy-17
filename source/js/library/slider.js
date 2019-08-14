
//Контейнеры с ихображениями и центровщик контента
const containerTwo =  document.querySelector(".slider__container-two");
const containerOne =  document.querySelector(".slider__container-one");
const image = document.querySelector(".slider__image--centering");

// Ползунок/переключатель
const circle = document.querySelector(".slider__toggle");
const line = document.querySelector(".slider__line");
let   right = line.getBoundingClientRect().right,
      left = line.getBoundingClientRect().left;

// Разрешения экранов
let mobileWidth = 320;
let tableWidth = 768;
let desktopWidth = 1220;
let browser = document.body.clientWidth;


//Слайдер для мобильной версии
if (browser >= mobileWidth && browser < tableWidth) {
  const imageWrapper =  document.querySelector(".slider__slides");
  line.addEventListener("click", (e) => {
    circle.classList.toggle("toggle--on")
    imageWrapper.classList.toggle("image-wrapper--move")
  })
};

//Изменение стилей
function changeStyle(rangeValue, fixTab) {

  //Реализация прокрутки с клавиатуры, для доступности
  circle.onfocus = () => {
    document.documentElement.scrollTop = 1920;
    document.addEventListener("keydown", (e) => {
        if (e.key == "ArrowLeft") {
          if (rangeValue - 10 >= 0) rangeValue = rangeValue - 10;
        }
        if (e.key == "ArrowRight") {
          if (rangeValue + 10 <= (right-left)) rangeValue = rangeValue + 10;
        }
        changeStyle(rangeValue, 0);
    })
  }
  circle.style.transform = `translateX(${rangeValue}px)`;
  let indexWidth = rangeValue*image.offsetWidth/line.offsetWidth + fixTab;
  image.style.transform = `translateX(-${image.offsetWidth - indexWidth}px)`;
  containerOne.style.width =  indexWidth + "px";
  containerOne.style.transform = `translateX(${image.offsetWidth - indexWidth}px)`;
  containerTwo.style.width = `${image.offsetWidth - indexWidth}px`;

  //Изменение фона
  const bgSlider = document.querySelector(".example");
  let bgWidthOffset = (circle.getBoundingClientRect().right-circle.clientWidth/2)/browser*100;
  let coefficient = rangeValue*0.00106 + 0.78;
  //фикс для широких экранов
  if (rangeValue > line.offsetWidth - 5) {
    coefficient = 100;
  }

  if (browser >= desktopWidth) {
    bgSlider.style.backgroundImage = `linear-gradient(#ffffff 190px, transparent 190px, transparent 100%),
    linear-gradient(90deg, transparent 0%, transparent ${bgWidthOffset*coefficient}%, #eaeaea ${bgWidthOffset*coefficient}%, #eaeaea 100%)`;
  }
  if (browser >= tableWidth && browser < desktopWidth) {
    if (rangeValue < line.offsetWidth - (line.offsetWidth - 5)) {
      coefficient = 0;
    };

    bgSlider.style.backgroundImage = `linear-gradient(#ffffff 575px, transparent 575px, transparent 100%),
    linear-gradient(90deg, transparent 0%, transparent ${bgWidthOffset*coefficient}%, #eaeaea ${bgWidthOffset*coefficient}%, #eaeaea 100%)`;
  }

}

//Начальное состояние

//Функция изминения
function moveAt(pageX, fixTab) {
  let range = pageX - left;

  if (range >= 0  && range <= (right-left)) {
    changeStyle(range, fixTab);
  };
};

//Слайдер для десктопной версии
if (browser >= desktopWidth) {
  changeStyle(205, 0);
  circle.onmousedown = (e) => {
    e.preventDefault();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(e) {
      moveAt(e.pageX, 0);
    };

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    circle.ondragstart = () => {
      return false;
    };

  }

}

//Слайдер для таб версии
if (browser >= tableWidth && browser < desktopWidth) {
  changeStyle(205, 30);
  circle.ontouchstart = (e) => {
    e.preventDefault();

    document.addEventListener("touchmove", touchMove);
    document.addEventListener("touchend", touchEnd);

    function touchMove(e) {
      moveAt(e.changedTouches[0].pageX, 0);
    };

    function touchEnd() {
      document.removeEventListener("touchmove", touchMove);
      document.removeEventListener("touchend", touchEnd);
    }

    circle.ondragstart = () => {
      return false;
    };

  };

}
