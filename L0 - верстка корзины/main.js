let burgerBtn = document.querySelector(".header__nav__burger-btn");
let burgerBtnFlag = "closed";

console.log(burgerBtn, burgerBtnFlag);

function openCloseBurger(state) {
  burgerBtn.setAttribute("data-state", state);
}

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (burgerBtnFlag === "closed") {
    burgerBtnFlag = "opened";
    openCloseBurger(burgerBtnFlag);
  } else {
    burgerBtnFlag = "closed";
    openCloseBurger(burgerBtnFlag);
  }
});

// FETCHING AND CREATING LAYOUT

function fetchJSON(json) {
  return;
}
// DROPDOWN MENU

const dropDownButtons = document.querySelectorAll(".dropdown-btn");

function openDropDown(state, header, list) {
  if (state === "closed") {
    state = "opened";
    header.setAttribute("data-state", state);
    setTimeout(() => {
      list.style.overflow = "visible";
    }, 200);
  } else {
    state = "closed";
    list.style.overflow = "hidden";
    header.setAttribute("data-state", state);
  }
}

dropDownButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const dropDownHeader = button.closest(".cart-inner__dropdown__header");
    const dropDownState = dropDownHeader.getAttribute("data-state");
    const list = dropDownHeader.nextSibling.nextSibling.children[0];

    console.log(list);
    openDropDown(dropDownState, dropDownHeader, list);
  });
});

// Price font size

const price = document.querySelectorAll(".item-right__prices-total");

price.forEach((price) => {
  const priceLength = price.textContent.length;
  if (priceLength > 10) {
    price.style.fontSize = "17px";
  }
});

// Checking for amount of items left

function updateToMinMaxAvailableAmount(input, maxAmount, addBtn, decreaseBtn) {
  if (input.value > maxAmount) {
    input.value = maxAmount;
    addBtn.style.opacity = "0.2";
    addBtn.style.cursor = "auto";
    addBtn.disabled = true;
  }
  if (input.value < 1) {
    input.value = 1;
    decreaseBtn.style.opacity = "0.2";
    decreaseBtn.style.cursor = "auto";
    decreaseBtn.disabled = true;
  }
}

const itemQuantityInputs = document.querySelectorAll(".counter-input");

itemQuantityInputs.forEach((input) => {
  const inputParentNode = input.closest("div");
  const leftInStock = inputParentNode.nextSibling.nextSibling;
  const availableAmountText = leftInStock.children[0].closest("span");
  let amountInStock;
  if (availableAmountText != null) {
    amountInStock = availableAmountText.textContent;
  }
  const addBtn = input.nextElementSibling;
  const decreaseBtn = input.previousElementSibling;

  input.addEventListener("change", (e) => {
    checkForValidAmount(input, amountInStock, addBtn, decreaseBtn);
    updateToMinMaxAvailableAmount(input, amountInStock, addBtn, decreaseBtn);
  });
});

// adding/decreasing 1 to value

function decreaseIncreaseAmount(operation, input) {
  let inputValue = input.value;
  if (operation === "decrease") {
    inputValue--;
  }
  if (operation === "increase") {
    inputValue++;
  }
  input.value = inputValue;
}

function checkForValidAmount(input, availableAmount, addBtn, decreaseBtn) {
  if (input.value === "1") {
    decreaseBtn.style.opacity = "0.2";
    decreaseBtn.style.cursor = "auto";
    decreaseBtn.disabled = true;
  } else {
    decreaseBtn.style.opacity = "1";
    decreaseBtn.style.cursor = "pointer";
    decreaseBtn.disabled = false;
  }
  if (input.value === availableAmount) {
    addBtn.style.opacity = "0.2";
    addBtn.style.cursor = "auto";
    addBtn.disabled = true;
  } else {
    addBtn.style.opacity = "1";
    addBtn.style.cursor = "pointer";
    addBtn.disabled = false;
  }
}

const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach((btn) => {
  const input = btn.previousElementSibling;

  const amountAvailable =
    btn.parentNode.nextElementSibling.children[0].textContent;

  if (input.value === amountAvailable) {
    btn.style.opacity = "0.2";
    btn.style.cursor = "auto";
    btn.disabled = true;
  } else {
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.disabled = false;
  }

  const decreaseBtn = btn.previousElementSibling.previousElementSibling;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    decreaseIncreaseAmount("increase", input);
    checkForValidAmount(input, amountAvailable, btn, decreaseBtn);
  });
});

const decreaseButtons = document.querySelectorAll(".decrease-btn");

decreaseButtons.forEach((btn) => {
  const input = btn.nextElementSibling;
  const amountAvailable =
    btn.parentNode.nextElementSibling.children[0].textContent;

  if (input.value === "1") {
    btn.style.opacity = "0.2";
    btn.style.cursor = "auto";
    btn.disabled = true;
  } else {
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.disabled = false;
  }

  const addBtn = btn.nextElementSibling.nextElementSibling;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    decreaseIncreaseAmount("decrease", input);
    checkForValidAmount(input, amountAvailable, addBtn, btn);
  });
});

// Chooose all

const chooseAllInput = document.querySelector("#choose-all");

const itemCheckboxes = document.querySelectorAll(".item-checkbox");

itemCheckboxes.forEach((checkbox) => {
  checkbox.checked = true;
  checkbox.addEventListener("change", () => {
    let allAreChecked = true;

    itemCheckboxes.forEach((box) => {
      if (box.checked) {
        return;
      }
      allAreChecked = false;
    });

    if (allAreChecked) {
      return (chooseAllInput.checked = true);
    } else {
      return (chooseAllInput.checked = false);
    }
  });
});

chooseAllInput.addEventListener("change", () => {
  if (chooseAllInput.checked) {
    itemCheckboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    itemCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
});

// DeliveryCountersStyles

const deliveryCounters = document.querySelectorAll(
  ".delivery__content__date-item-counter"
);

deliveryCounters.forEach((counter) => {
  if (counter.textContent.length > 1) {
    counter.classList.add("delivery__content__date-item-counter_wide");
  } else {
    counter.classList.remove("delivery__content__date-item-counter_wide");
  }

  if (counter.textContent === "1") {
    counter.style.opacity = "0";
  } else {
    counter.style.opacity = "1";
  }
});

// Free Delivery Functions

const freeDeliveryTexts = document.querySelectorAll(
  ".inner__info-additional-text_green"
);
console.log(freeDeliveryTexts);

freeDeliveryTexts.forEach((text) => {
  const popupMenu = text.parentNode.nextElementSibling;
  text.addEventListener("mouseover", () => {
    popupMenu.style.display = "block";
  });
  text.addEventListener("mouseout", () => {
    popupMenu.style.display = "none";
  });
});
