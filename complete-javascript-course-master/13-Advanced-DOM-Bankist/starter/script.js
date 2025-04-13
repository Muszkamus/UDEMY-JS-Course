'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////
///////
//
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
// Event Delegation: Implementing Page Navigation

//Bad way

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); //Prevents html behaviour
//     const id = this.getAttribute('href'); // simply puts a selector, makes life easier to point things
//     console.log(id);
//     //document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Good way
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

// ✅ Event Delegation: Better way to handle nav links

// Attach one event listener to the parent container of all nav links
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link jump behavior (handled manually below)

  // 🔍 Only handle clicks that originated from actual nav links (not empty space or container)
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // Extract the section ID from href (e.g., #section--2)

    // 🔽 Scroll to the corresponding section smoothly
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
