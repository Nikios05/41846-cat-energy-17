const catName = document.querySelector("[name='cat-name'");
const catWeight = document.querySelector("[name='cat-weight'");
const catAge = document.querySelector("[name='cat-age'");
const email = document.querySelector("[type='email'");
const phoneNumber = document.querySelector("[type='tel'");
const submit = document.querySelector(".form__submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("ok")
  let errorMessage = "";

  if (catWeight.value == "") {
    catWeight.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Поле имени обязательно для заполнения\n"
  } else if (catWeight.value > 25) {
    catWeight.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Если ваш кот столько весит, значит вы побили мировой рекорд\n"
  }

  if (catName.value == "") {
    catName.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Поле веса обязательно для заполнения\n"
  } else if (catName.value.length > 30) {
    catName.classList.add("form__text--invalid");
    errorMessage = errorMessage + "У вашего кота слишком длинное имя, может быть есть домашння кличка?\n"
  }

  if (email.value == "") {
    email.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Поле email обязательно для заполнения\n"
  }

  if (phoneNumber.value == "") {
    phoneNumber.classList.add("form__text--invalid");
    errorMessage = errorMessage + "Поле номера телефона обязательно для заполнения\n"
  }

  alert(errorMessage);
})
