export function siteList() {
  let menu = document.querySelector(".site-list"),
      item = document.querySelectorAll(".site-list__item"),
      btnOpen = document.querySelector(".main-nav__toggle");

  btnOpen.addEventListener("click", () => {
    console.log("ok");
    menu.classList.toggle("site-list--on");
    item.forEach((i) => {
      i.classList.toggle("site-list__item--on");
    });
  });
};
