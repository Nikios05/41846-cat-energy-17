
//Контейнеры с ихображениями и центровщик контента
const containerTwo =  document.querySelector(".slider__container-two");
const containerOne =  document.querySelector(".slider__container-one");
const image = document.querySelector(".slider__image--centering");

// Ползунок/переключатель
const circle = document.querySelector(".slider__toggle");
const line = document.querySelector(".slider__line");

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
}

//Изменение стилей
function changeStyle(rangeValue) {
circle.style.transform = `translateX(${rangeValue}px)`;
let indexWidth = rangeValue*image.offsetWidth/line.offsetWidth;
image.style.transform = `translateX(-${image.offsetWidth - indexWidth}px)`;
containerOne.style.width =  indexWidth + "px";
containerOne.style.transform = `translateX(${image.offsetWidth - indexWidth}px)`;
containerTwo.style.width = `${image.offsetWidth - indexWidth}px`;

//Изменение фона
const bgSlider = document.querySelector(".example");
let bgWidthOffset = (circle.getBoundingClientRect().right-circle.clientWidth/2)/browser*100;
let coefficient = rangeValue*0.00106 + 0.78;
bgSlider.style.backgroundImage = `linear-gradient(#ffffff 190px, transparent 190px, transparent 100%),
linear-gradient(90deg, transparent 0%, transparent ${bgWidthOffset*coefficient}%, #eaeaea ${bgWidthOffset*coefficient}%, #eaeaea 100%)`;
}

//Слайдер для десктопной версии
if (browser >= desktopWidth) {
changeStyle(205);

circle.onmousedown = (e) => {
e.preventDefault();

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", onMouseUp);

function onMouseMove(e) {
  moveAt(e.pageX);
};

function moveAt(pageX) {
  let right = line.getBoundingClientRect().right,
      left = line.getBoundingClientRect().left;
  let range = pageX - left;
  if (range >= 0  && range <= (right-left)) {
    changeStyle(range);
  };
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
