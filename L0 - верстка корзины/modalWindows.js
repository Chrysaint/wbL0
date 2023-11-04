const changePaymentBtns = document.querySelectorAll(".edit-payment-btn");
const changeDeliveryAddressBtns =
  document.querySelectorAll(".edit-delivery-btn");

const modals = document.querySelectorAll(".modal");
const paymentModal = document.querySelector(".modal-payment");
const deliveryModal = document.querySelector(".modal-address");
const closeModalBtns = document.querySelectorAll(".close-modal-btn");

const choosePaymentMethodBtn = document.querySelector("#modal-payment-btn");
const chooseDeliveryAddressBtn = document.querySelector("#modal-delivery-btn");

const chooseCourierDeliveryBtn = document.querySelector("#delivery-by-courier");
const chooseDeliveryToShopBtn = document.querySelector("#delivery-to-shop");
const deliveryContentBlock = document.querySelector(".modal-delivery__content");

const body = document.querySelector("body");

function openCloseModal(modal, modalsSection) {
  const modalState = modal.getAttribute("data-visible");
  if (modalState === "true") {
    body.style.overflow = "auto";
    modal.setAttribute("data-visible", "false");
    modalsSection.classList.remove("active");
  }
  if (modalState === "false") {
    body.style.overflow = "hidden";
    modal.setAttribute("data-visible", "true");
    modalsSection.classList.add("active");
  }
}

changePaymentBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const modalSection = e.target.closest("form");
    openCloseModal(paymentModal, modalSection);
  });
});

changeDeliveryAddressBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const modalSection = e.target.closest("form");
    openCloseModal(deliveryModal, modalSection);
  });
});

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    body.style.overflow = "auto";
    btn.closest("form").setAttribute("data-visible", "false");
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("modal-payment") ||
      !e.target.classList.contains("modal-delivery")
    ) {
      return;
    }

    body.style.overflow = "auto";
    modal.setAttribute("data-visible", "false");
  });
});

choosePaymentMethodBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const modalSection = e.target.closest("form");
  openCloseModal(paymentModal, modalSection);
});

chooseDeliveryAddressBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const modalSection = e.target.closest("form");
  openCloseModal(deliveryModal, modalSection);
});

chooseCourierDeliveryBtn.addEventListener("click", (e) => {
  e.preventDefault();
  deliveryContentBlock.setAttribute("data-delivery", "courier");
  chooseDeliveryToShopBtn.classList.remove("active");
  chooseCourierDeliveryBtn.classList.add("active");
});

chooseDeliveryToShopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  deliveryContentBlock.setAttribute("data-delivery", "self");
  chooseDeliveryToShopBtn.classList.add("active");
  chooseCourierDeliveryBtn.classList.remove("active");
});
