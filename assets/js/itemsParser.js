import items from "../../data/products.json";

const itemList = document.querySelector(".cart-inner__available-items");
const unavailableItemList = document.querySelector(
  ".cart-inner__dropdown__list_unavailable"
);

// IMPLEMENT

function createItemForUnavailabeList(item) {
  let unavailableItemCode = `<li id="item-card-${
    item.id + 50
  }" class="cart-inner__dropdown__item">
  <div class="dropdown__item-left">
    
    `;
  if (item.size) {
    unavailableItemCode += `<div
    data-screen-size="small"
    class="dropdown__item-img__size dropdown__item-img__size_unavailable"
  >
  ${item.size}
  </div>`;
  }
  unavailableItemCode += `
      
    
    <img
      class="dropdown__item-img"
      src="./assets/src/img/cart/${item.image}"
      alt="item-img"
    />

    <div class="dropdown__item-left__info">
      <p class="dropdown__item-name">
        ${item.name}
      </p>

      <div class="dropdown__item-left__info_aditional">
        <p class="item-left__info_aditional-text">
        `;
  if (item.color) {
    unavailableItemCode += `Цвет: ${item.color}`;
  }
  unavailableItemCode += `
        </p>
        <p class="item-left__info_aditional-text">
        `;
  if (item.size) {
    unavailableItemCode += `Размер: ${item.size}`;
  }
  unavailableItemCode += `
        </p>
      </div>
    </div>
  </div>
  <div class="dropdown__item-right">
    <div class="dropdown__item-right__counter">
      <div class="counter__buttons">
        <button class="counter__add-to-fav">
          <svg
            data-info="add to favourite"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.03396 4.05857C2.26589 4.75224 1.76684 5.83284 1.99493 7.42928C2.22332 9.02783 3.26494 10.6852 4.80436 12.3478C6.25865 13.9184 8.10962 15.4437 9.99996 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.005 7.4293C18.233 5.83285 17.734 4.75224 16.9659 4.05856C16.1766 3.34572 15.055 3 14 3C12.1319 3 11.0923 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84166 5.04882 9.6464 4.85355C9.59641 4.80356 9.54182 4.7466 9.48224 4.68443C8.90757 4.08479 7.86797 3 5.99995 3C4.94495 3 3.82325 3.34573 3.03396 4.05857ZM2.36371 3.31643C3.37369 2.40427 4.75202 2 5.99995 2C8.07123 2 9.34539 3.11257 9.99996 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87773 18.0333 9.69995 17.9C7.69353 16.3952 5.66443 14.7485 4.0706 13.0272C2.48503 11.3148 1.27665 9.47217 1.00498 7.57072C0.733012 5.66716 1.33249 4.24776 2.36371 3.31643Z"
              fill="black"
            />
          </svg>
        </button>
        <button data-item="${item.id + 50}" class="counter__remove">
          <svg
            data-info="remove from cart"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="dropdown__item-right__prices"></div>
  </div>
</li>
  `;
  unavailableItemList.insertAdjacentHTML("beforeend", unavailableItemCode);
}

function createItemForAvailabeList(item) {
  const personalDiscount = parseInt(item.price * 0.1);
  const itemDiscount = parseInt(item.price * (1 - item.discount));
  const totalDiscount = personalDiscount + itemDiscount;
  const totalPrice = item.price - totalDiscount;
  const totalQuantity = item.stock.reduce((quantitySum, stock) => {
    quantitySum += stock.quantity;
    return quantitySum;
  }, 0);

  let itemCode = `<li id="item-card-${item.id}" class="cart-inner__dropdown__item `;
  if (totalQuantity != 0) {
    itemCode += "cart-inner__dropdown__item_available";
  } else {
    itemCode += "cart-inner__dropdown__item_inavailable";
  }
  itemCode += `">
    <div class="dropdown__item-left">
      <label for="item-${item.id}" class="wb-checkbox">
        <input
          class="item-checkbox"
          type="checkbox"
          id="item-${item.id}"
        />
        <span class="wb-checkbox_custom"></span>
      </label>

      <div class="dropdown__item-img__wrapper">
      `;

  if (item.size) {
    itemCode += `<div
        data-screen-size="small"
        class="dropdown__item-img__size"
      >
       ${item.size}
      </div>`;
  }

  itemCode += ` 
        <img
          class="dropdown__item-img"
          src="./assets/src/img/cart/${item.image}"
          alt="item-img"
        />
      </div>

      <div class="dropdown__item-left__info">
        <div
          data-screen-size="small"
          class="dropdown__item-right__prices"
        >
          <p class="item-right__prices-total total-price-${item.id}">
          ${totalPrice} <span>сом</span>
          </p>
          <p class="item-right__prices-old old-price-${item.id}">${
    item.price
  } сом</p>
          <div class="item-right__prices__discount">
            <p class="item-right__prices__discount-text">
              <span class="item-right__prices-discount-text_grey"
                >Скидка ${parseInt(item.discount * 100)}%</span
              >
              <span class="item-right__prices-discount-text_black item-discount-${
                item.id
              }"
                >-${itemDiscount} сом</span
              >
            </p>
            <p class="item-right__prices__discount-text">
              <span class="item-right__prices-discount-text_grey"
                >Скидка покупателя 10%</span
              >
              <span class="item-right__prices-discount-text_black item-personal-discount-${
                item.id
              }"
                >-${personalDiscount} сом</span
              >
            </p>
          </div>
        </div>
        <p class="dropdown__item-name">${item.name}</p>

        <div class="dropdown__item-left__info_aditional">
        `;

  if (item.color) {
    itemCode += `<p class="item-left__info_aditional-text">Цвет: ${item.color}</p>`;
  }

  if (item.size) {
    itemCode += `<p
            data-screen-size="large"
            class="item-left__info_aditional-text"
          >
            Размер: ${item.size}
          </p>`;
  }

  itemCode += `  
        </div>

        <div class="item-left__company-info">
          <span>${item.stock[0].stockName}</span> <br />

          <div class="dropdown__item-company">
            <span class="dropdown__item-company-info__name"
              >${item.company}</span
            >
            <img
              class="dropdown__item-company__info-img"
              src="./assets/src/icons/info.svg"
              alt="information"
            />
            <div class="dropdown__item-company__info">
              <p class="item-company__info-title">
                ${item.company}
              </p>
              <p class="item-company__info-ogrn">
                ОГРН: 5167746237148
              </p>
              <p class="item-company__info-address">
                129337, Москва, улица Красная Сосна, 2, корпус 1,
                стр. 1, помещение 2, офис 34
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown__item-right">
      <div class="dropdown__item-right__counter">
        <div class="dropdown__item-right__counter-wrapper">
          <button
            class="counter-btn decrease-btn"
            id="decrease-btn"
            disabled
          >
            <svg
              width="11"
              height="2"
              viewBox="0 0 11 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0996 1.82422H0.919922V0.515625H10.0996V1.82422Z"
                fill="black"
              />
            </svg>
          </button>
          <input data-item-id="${item.id}" class="counter-input" type="text" value="1" />
          <button class="counter-btn add-btn" id="add-btn">
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0996 5.82422H6.1543V9.75977H4.85547V5.82422H0.919922V4.51562H4.85547V0.580078H6.1543V4.51562H10.0996V5.82422Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        `;
  if (totalQuantity < 5) {
    itemCode += `<p class="counter-alert">
            Осталось
            <span id="maxQuantity-${item.id}" class="counter-alert__amount"> ${totalQuantity} </span> шт.
            </p>`;
  } else {
    itemCode += `<p class="counter-alert counter-alert_invisible">
    Осталось
    <span id="maxQuantity-${item.id}" class="counter-alert__amount"> ${totalQuantity} </span> шт.
    </p>`;
  }
  itemCode += `
        <div class="counter__buttons">
          <button class="counter__add-to-fav">
            <svg
              data-info="add to favourite"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.03396 4.05857C2.26589 4.75224 1.76684 5.83284 1.99493 7.42928C2.22332 9.02783 3.26494 10.6852 4.80436 12.3478C6.25865 13.9184 8.10962 15.4437 9.99996 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.005 7.4293C18.233 5.83285 17.734 4.75224 16.9659 4.05856C16.1766 3.34572 15.055 3 14 3C12.1319 3 11.0923 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84166 5.04882 9.6464 4.85355C9.59641 4.80356 9.54182 4.7466 9.48224 4.68443C8.90757 4.08479 7.86797 3 5.99995 3C4.94495 3 3.82325 3.34573 3.03396 4.05857ZM2.36371 3.31643C3.37369 2.40427 4.75202 2 5.99995 2C8.07123 2 9.34539 3.11257 9.99996 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87773 18.0333 9.69995 17.9C7.69353 16.3952 5.66443 14.7485 4.0706 13.0272C2.48503 11.3148 1.27665 9.47217 1.00498 7.57072C0.733012 5.66716 1.33249 4.24776 2.36371 3.31643Z"
                fill="black"
              />
            </svg>
          </button>
          <button data-item="${item.id}" class="counter__remove">
            <svg
              data-info="remove-from-cart"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        data-screen-size="large"
        class="dropdown__item-right__prices"
      >
        <p class="item-right__prices-total total-price-${
          item.id
        }">${totalPrice} <span>сом</span></p>
        <p class="item-right__prices-old old-price old-price-${item.id}">${
    item.price
  } сом</p>
        <div class="item-right__prices__discount">
          <p class="item-right__prices__discount-text">
            <span class="item-right__prices-discount-text_grey"
              >Скидка ${parseInt(item.discount * 100)}%</span
            >
            <span class="item-right__prices-discount-text_black item-discount item-discount-${
              item.id
            }"
              >-${itemDiscount} сом</span
            >
          </p>
          <p class="item-right__prices__discount-text">
            <span class="item-right__prices-discount-text_grey"
              >Скидка покупателя 10%</span
            >
            <span class="item-right__prices-discount-text_black personal-discount item-personal-discount-${
              item.id
            }"
              >-${personalDiscount} сом</span
            >
          </p>
        </div>
      </div>
    </div>
  </li>`;
  itemList.insertAdjacentHTML("beforeend", itemCode);
}

items.forEach((item) => {
  createItemForAvailabeList(item);
  createItemForUnavailabeList(item);
});
