'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
// below is the another way of selecting elements using there id, it is more faster than the queryselector method
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
