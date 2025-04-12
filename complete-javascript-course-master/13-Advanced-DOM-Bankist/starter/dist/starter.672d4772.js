'use strict';
///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for(let i = 0; i < btnsOpenModal.length; i++)btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
////////
///////
// 🔍 Selecting specific elements from the DOM
const header = document.querySelector('.header');
const firstSection = document.querySelector('.section');
const section1 = document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
const btns = document.getElementsByClassName('btn');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `
  We use cookies for improved functionality and analytics. 
  <button class="btn btn--close-cookie">Got it!</button>
`;
header.append(message);
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    message.remove();
});
// New lecture
// Styles
message.style.backgroundColor = '#37383d';
message.style.width;
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//# sourceMappingURL=starter.672d4772.js.map
