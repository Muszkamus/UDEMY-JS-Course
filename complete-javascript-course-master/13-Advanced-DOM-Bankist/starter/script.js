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

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// 🆕 Lecture: Styling, Attributes, and Classes

// 🎨 Inline styles
message.style.backgroundColor = '#37383d'; // Sets inline background color of the element
message.style.width - '120%'; // ❌ Has no effect — should use '=' not '-'

// 🕵️‍♂️ Reading inline and computed styles
console.log(message.style.backgroundColor); // Logs inline background color (only if set via JS or HTML style)
console.log(getComputedStyle(message).color); // Logs final computed color (includes external CSS)
console.log(getComputedStyle(message).height); // Logs computed height (e.g., "50px")

// 📏 Modify height based on current computed height
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
// Parses pixel height (as number), adds 30px, then sets new height

// 🎨 Modify a CSS custom property (variable)
document.documentElement.style.setProperty('--color-primary', 'orangered');
// Changes CSS variable value (e.g., used in :root { --color-primary: ... })

// 🔤 Working with attributes
const logo = document.querySelector('.nav__logo'); // Selects the logo image

console.log(logo.alt); // Logs current 'alt' attribute value of the logo
logo.alt = 'New logo name'; // Sets a new value for the alt text
console.log(logo.alt); // Logs the updated alt text

// ❌ Accessing non-standard attribute (fails)
console.log(logo.designer); // undefined — not a known property
console.log(logo.getAttribute('designer')); // null — not yet defined

// ✅ Set custom attribute
logo.setAttribute('company', 'Bankist'); // Adds custom attribute: company="Bankist"

console.log(logo.src); // Logs absolute image URL (full path)
console.log(logo.getAttribute('src')); // Logs relative src attribute from HTML

const link = document.querySelector('.nav__link--btn'); // Selects nav button link

console.log(link.href); // Logs absolute URL (full path)
console.log(link.getAttribute('href')); // Logs relative URL value from HTML

// 📦 Data attributes
console.log(logo.dataset.versionNumber);
// Logs value of data-version-number="3.0" (converted to camelCase)
// These attributes are prefixed with 'data-' in HTML, accessed via `dataset`

// 🎯 Manipulating classes
logo.classList.add('c'); // Adds class 'c'
logo.classList.remove('c'); // Removes class 'c'
logo.classList.toggle('c'); // Toggles class 'c' on/off
logo.classList.contains('c'); // Checks if class 'c' exists (returns true/false)

// ❌ Avoid overwriting all classes
// logo.className = 'New classname'; // Replaces ALL existing classes — bad practice
