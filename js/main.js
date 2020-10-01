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

// ===================================
const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      console.log(pad(deltaTime));
    }, 1000);
  },
};

function pad(value) {
  return String(value / 1000).padStart(2, "0");
}

// timer.start();
