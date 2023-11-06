let burgerBtn = document.querySelector(".header__nav__burger-btn");
let burgerBtnFlag = "closed";

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

// Price font size

const price = document.querySelectorAll(".item-right__prices-total");

price.forEach((price) => {
  const priceLength = price.innerText.length;
  if (priceLength > 10) {
    price.style.fontSize = "17px";
  }
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

freeDeliveryTexts.forEach((text) => {
  const popupMenu = text.parentNode.nextElementSibling;
  text.addEventListener("mouseover", () => {
    popupMenu.style.display = "block";
  });
  text.addEventListener("mouseout", () => {
    popupMenu.style.display = "none";
  });
});

// fav

const addToFavBtns = document.querySelectorAll(".counter__add-to-fav");

addToFavBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.toggle("active");
  });
});
