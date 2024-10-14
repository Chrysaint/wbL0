import items from "../../data/products.json" with { type: "json" };

function numberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function updateToMinMaxAvailableAmount(input, maxAmount, addBtn, decreaseBtn) {
  if (input.value >= maxAmount) {
    addBtn.style.opacity = "0.2";
    addBtn.style.cursor = "auto";
    addBtn.disabled = true;
    decreaseBtn.style.opacity = "1";
    decreaseBtn.style.cursor = "pointer";
    decreaseBtn.disabled = false;
    input.value = maxAmount;
  }
  if (input.value <= 1) {
    input.value = 1;
    decreaseBtn.style.opacity = "0.2";
    decreaseBtn.style.cursor = "auto";
    decreaseBtn.disabled = true;
    addBtn.style.opacity = "1";
    addBtn.style.cursor = "pointer";
    addBtn.disabled = false;
  }
}

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
  if (parseInt(input.value) <= 1) {
    decreaseBtn.style.opacity = "0.2";
    decreaseBtn.style.cursor = "auto";
    decreaseBtn.disabled = true;
  } else {
    decreaseBtn.style.opacity = "1";
    decreaseBtn.style.cursor = "pointer";
    decreaseBtn.disabled = false;
  }
  if (parseInt(input.value) >= availableAmount) {
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

  const amountAvailable = parseInt(
    btn.parentNode.nextElementSibling.children[0].textContent
  );

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
    calcChangePrices(input);
    changeTotalPrices();
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
    calcChangePrices(input);
    changeTotalPrices();
  });
});

const quantityInputs = document.querySelectorAll(".counter-input");

function changeTotalPrices() {
  const summaryPriceBlock = document.querySelector("#summary-price");
  const summaryItemsBlock = document.querySelector("#summary-items");
  const summaryPriceNoDiscountBlock = document.querySelector(
    "#summary-price-no-discount"
  );
  const cartCounter = document.querySelectorAll(
    ".header__menu-item__cart-counter"
  );
  const totalCartItems = document.querySelector("#amount-of-items");
  const totalCartPrice = document.querySelector("#total-cart-price");
  const summaryDiscountBlock = document.querySelector("#summary-discount");
  const allPersonalDiscounts = document.querySelectorAll(".personal-discount");
  const allItemDiscounts = document.querySelectorAll(".item-discount");
  const allOldPrices = document.querySelectorAll(".old-price");
  let itemsCounter = 0;
  for (let i = 0; i < quantityInputs.length; i++) {
    itemsCounter += parseInt(quantityInputs[i].value);
  }

  summaryItemsBlock.textContent = itemsCounter + " товар(а)";
  totalCartItems.textContent = itemsCounter;
  cartCounter.forEach((counter) => {
    counter.textContent = itemsCounter;
  });

  let totalItemDiscount = 0;
  let totalPersonalDiscount = 0;
  let totalDiscount = 0;

  for (let i = 0; i < allPersonalDiscounts.length; i++) {
    const personalDiscountAmount = parseInt(
      allPersonalDiscounts[i].textContent.replace(/\D/g, "")
    );
    totalPersonalDiscount += personalDiscountAmount;
  }

  for (let i = 0; i < allItemDiscounts.length; i++) {
    const itemDiscountAmount = parseInt(
      allItemDiscounts[i].textContent.replace(/\D/g, "")
    );
    totalItemDiscount += itemDiscountAmount;
  }

  totalDiscount = totalItemDiscount + totalPersonalDiscount;

  summaryDiscountBlock.textContent = "-" + totalDiscount + " сом";
  let totalOldPrice = 0;
  for (let i = 0; i < allOldPrices.length; i++) {
    const itemOldPrice = parseInt(
      allOldPrices[i].textContent.replace(/\D/g, "")
    );
    totalOldPrice += itemOldPrice;
  }

  summaryPriceNoDiscountBlock.textContent = totalOldPrice + " сом";

  let totalCartSum = totalOldPrice - totalDiscount;
  totalCartPrice.textContent = numberWithSpaces(totalCartSum);
  summaryPriceBlock.innerHTML =
    numberWithSpaces(totalCartSum) +
    '<span class=\\"inner__info-row_small\\"> сом</span>';

  const instantPayCheckbox = document.querySelector("#instant-pay");
  const orderBtn = document.querySelector(".cart-summary__btn");

  if (instantPayCheckbox.checked) {
    orderBtn.textContent = `Оплатить ${totalCartSum} сом`;
  }
}

function calcChangePrices(input) {
  let quantity = parseInt(input.value);
  const itemId = parseInt(input.getAttribute("data-item-id"));
  const changedItem = items.filter((item) => item.id === itemId)[0];

  const addBtn = input.nextElementSibling;
  const decreaseBtn = input.previousElementSibling;

  const maxQuantityBlock = document.querySelector(`#maxQuantity-${itemId}`);
  if (maxQuantityBlock) {
    const maxQuantity = parseInt(maxQuantityBlock.textContent);
    updateToMinMaxAvailableAmount(input, maxQuantity, addBtn, decreaseBtn);
  }

  quantity = parseInt(input.value);

  const discountValue = changedItem.discount;
  const personalDiscount = changedItem.price * 0.1;
  const itemDiscount = changedItem.price * (1 - discountValue);
  const totalPrice = parseInt(
    quantity * (changedItem.price - itemDiscount - personalDiscount)
  );
  const totalOldPrice = parseInt(quantity * changedItem.price);

  const summaryPersonalDiscount = parseInt(personalDiscount * quantity);
  const summaryItemDiscount = parseInt(itemDiscount * quantity);

  const summaryPersonalDiscountText = document.querySelectorAll(
    `.item-personal-discount-${itemId}`
  );
  const summaryitemDiscountText = document.querySelectorAll(
    `.item-discount-${itemId}`
  );

  summaryPersonalDiscountText.forEach((discountText) => {
    discountText.textContent = "-" + summaryPersonalDiscount + " сом";
  });

  summaryitemDiscountText.forEach((discountText) => {
    discountText.textContent = "-" + summaryItemDiscount + " сом";
  });

  const oldPriceText = document.querySelectorAll(`.old-price-${itemId}`);
  const totalPriceText = document.querySelectorAll(`.total-price-${itemId}`);

  oldPriceText.forEach((oldPrice) => {
    oldPrice.textContent = totalOldPrice + " сом";
  });

  totalPriceText.forEach((price) => {
    price.innerHTML = totalPrice + "<span> сом</span>";
  });
}
changeTotalPrices();

// const discounts = das.reduce({ priceWithoutDiscount, priceWithDiscount });
quantityInputs.forEach((input, idx) => {
  const addBtn = input.nextElementSibling;
  const decreaseBtn = input.previousElementSibling;
  const maxAmount = parseInt(
    document.querySelector(`#maxQuantity-${idx + 1}`).textContent
  );
  input.addEventListener("change", () => {
    calcChangePrices(input);
    checkForValidAmount(input, maxAmount, addBtn, decreaseBtn);
    changeTotalPrices();
  });
});

const removeBtns = document.querySelectorAll(".counter__remove");

function deleteItem(id) {
  const item = document.querySelector(`#item-card-${id}`);
  item.remove();
}

removeBtns.forEach((btn) => {
  const id = parseInt(btn.getAttribute("data-item"));
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    deleteItem(id);
  });
});
