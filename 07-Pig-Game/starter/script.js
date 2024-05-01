'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
// below is the another way of selecting elements using there id, it is more faster than the queryselector method
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

// creating an array to save the scores of the players
const scores = [0, 0];

let currentScore = 0;

// know who's the active player
let activePlayer = 0;

// implementing the rolling dice logic
btnRoll.addEventListener('click', function () {
  // generating a randome dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display the dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check if it is 1 , if so, switch the player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // this needs to be changed later
  } else {
    // switch to next player
  }
});
