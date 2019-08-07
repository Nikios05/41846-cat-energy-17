
//Контейнеры с ихображениями и центровщик контента
let containerTwo =  document.querySelector(".slider__container-two"),
containerOne =  document.querySelector(".slider__container-one"),
image = document.querySelector(".slider__image--centering");

// Ползунок/переключатель
let circle = document.querySelector(".slider__toggle"),
line = document.querySelector(".slider__line");

// Разрешения экранов
let mobileWidth = 320,
tableWidth = 768,
desktopWidth = 1220,
browser = document.body.clientWidth;

//Слайдер для мобильной версии
if (browser >= mobileWidth && browser < tableWidth) {
let imageWrapper =  document.querySelector(".slider__slides");
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
let bgSlider = document.querySelector(".example"),
  bgWidthOffset = (circle.getBoundingClientRect().right-circle.clientWidth/2)/browser*100;
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
