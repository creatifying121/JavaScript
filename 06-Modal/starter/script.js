'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  // console.log('button clicked');
  // make modal visible
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// handling keypress events
// keyboard events are the global events because they do not happen on one specific event, i.e., that happen for whole document. and for global events like keyboard events we usually listen whole document
// this time we want to know which key is pressed, in order to do that, we are passing a parameter "event" in the event handler function
document.addEventListener('keydown', function (event) {
  // console.log('a key was pressed');
  // console.log(event);
  if (event.key === 'Escape') {
    // console.log(event);
    // if the modal does not contain the hidden class then close the modal
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
