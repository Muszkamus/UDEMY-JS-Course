'use strict';
// Selecting modal elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal
const openModal = function () {
  modal.classList.remove('hidden'); // Show modal by removing 'hidden' class
  overlay.classList.remove('hidden'); // Show overlay by removing 'hidden' class
};

// Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden'); // Hide modal by adding 'hidden' class
  overlay.classList.add('hidden'); // Hide overlay by adding 'hidden' class
};

// Adding event listeners to open modal buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Event listeners for closing the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close modal when pressing the Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
