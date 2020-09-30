"use strict";

const refs = {
  burger: document.querySelector("#burger"),
  menu: document.querySelector(".menu"),
};

refs.burger.addEventListener("click", toggleBurger);

function toggleBurger(event) {
  event.preventDefault();
  event.currentTarget.classList.toggle("active");
  refs.menu.classList.toggle("active");
  document.body.classList.toggle("lock");
}
