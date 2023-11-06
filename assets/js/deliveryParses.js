// Не доработано

import items from "./data/products.json" assert { type: "json" };

const deliveryContent = document.querySelector(".delivery__content");

// IMPLEMENT
function createDeliveryDateItem() {
  let deliveryDateCode = `
            <div class="delivery__content__line">
                <p class="delivery__content__line-name">5—6 февраля</p>
                <div class="delivery__content__date-items">
                `;
  for (let i = 0; i < items.length; i++) {
    deliveryDateCode += `<div class="delivery__content__date-item">
                    <img
                      src="./src/img/cart/${items[i].image}"
                      alt="item${items.name}"
                      class="delivery__content__date-item-img"
                    />
                    <span id="delivery-item-counter-${items.id}" class="delivery__content__date-item-counter"
                      >1</span
                    >
                  </div>`;
  }
  deliveryDateCode += `
                  
                  
                  
                  </div>
                </div>
              </div>`;
  deliveryContent.insertAdjacentHTML("beforeend", deliveryDateCode);
}

createDeliveryDateItem();
