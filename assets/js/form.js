// !!!! FIX ALL !!!!

const nameSurnamePattern = /^[а-я]+$/i;
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const phonePattern = /^\+\d\s\d\d\d\s\d\d\d-\d\d-\d\d$/g;
const innPattern = /^\d{12}$/;

const nameInputErrorText = "Введите имя";
const surnameInputErrorText = "Введите фамилию";
const emailInputErrorText = "Введите почту";
const phoneInputErrorText = "Введите ваш телефон";
const innInputErrorText = "Введите ИНН";

const btn = document.querySelector(".cart-summary__btn");

const inputs = document.querySelectorAll(".reciever__form-input");
const phoneInput = document.querySelector("#reciever-phone");

const instantPayCheckbox = document.querySelector("#instant-pay");

inputs.forEach((input) => {
  const inputTitle = input.previousElementSibling;

  input.addEventListener("focus", () => {
    inputTitle.classList.add("active");
  });
  input.addEventListener("focusout", () => {
    if (!input.value) {
      inputTitle.classList.remove("active");
    }
  });
  input.addEventListener("change", (e) => {
    if (e.target.value) {
      inputTitle.classList.add("active");
    } else {
      inputTitle.classList.remove("active");
    }
  });
});

function checkForValidData(regex, input, error, errorText) {
  if (regex.test(input.value) === false) {
    input.style.borderBottom = "1px solid #F55123";
    input.style.color = "#F55123";
    error.style.color = "#F55123";
    error.textContent = errorText;
  } else {
    input.style.borderBottom = "1px solid rgba(0, 0, 0, 0.20)";
    input.style.color = "#000";
    error.style.color = "#000";
    error.textContent = "";
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#reciever-name");
  const surnameInput = document.querySelector("#reciever-surname");
  const emailInput = document.querySelector("#reciever-email");
  const phoneInput = document.querySelector("#reciever-phone");
  const innInput = document.querySelector("#reciever-inn");

  const nameInputError = document.querySelector("#name-input-err");
  const surnameInputError = document.querySelector("#surname-input-err");
  const emailInputError = document.querySelector("#email-input-err");
  const phoneInputError = document.querySelector("#phone-input-err");
  const innInputError = document.querySelector("#inn-input-err");
  checkForValidData(
    nameSurnamePattern,
    nameInput,
    nameInputError,
    nameInputErrorText
  );
  checkForValidData(
    nameSurnamePattern,
    surnameInput,
    surnameInputError,
    surnameInputErrorText
  );
  checkForValidData(
    emailPattern,
    emailInput,
    emailInputError,
    emailInputErrorText
  );
  checkForValidData(
    phonePattern,
    phoneInput,
    phoneInputError,
    phoneInputErrorText
  );

  if (!innInput.value) {
    return;
  }
  checkForValidData(innPattern, innInput, innInputError, innInputErrorText);
  if (innPattern.test(innInput.value === true)) {
    innInputError.textContent = "Для таможенного оформления";
  }
});

instantPayCheckbox.addEventListener("change", (e) => {
  const totalPrice = document.querySelector("#summary-price").textContent;
  if (e.target.checked) {
    btn.textContent = `Оплатить ${totalPrice}`;
  } else {
    btn.textContent = "Заказать";
  }
});
