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

    openDropDown(dropDownState, dropDownHeader, list);
  });
});
