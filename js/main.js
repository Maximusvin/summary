'use strict';

const refs = {
  burger: document.querySelector('#burger'),
  menu: document.querySelector('.menu'),
};

refs.burger.addEventListener('click', toggleBurger);

function toggleBurger(event) {
  event.preventDefault();
  event.currentTarget.classList.toggle('active');
  refs.menu.classList.toggle('active');
  document.body.classList.toggle('lock');
}

// function openBurger(event) {
//   event.currentTarget.classList.add('active');
//   refs.menu.classList.add('active');
//   document.body.classList.add('lock');
// }

// function closeBurger(event) {}
