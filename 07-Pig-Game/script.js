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

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// creating an array to save the scores of the players
let scores;

let currentScore;

// know who's the active player
let activePlayer;

// keeping track of game being played or not
let playing;

// initialization function
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  // starting conditions
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};

init();

// switching player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// implementing the rolling dice logic
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generating a randome dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display the dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `./dice/dice-${dice}.png`;

    // check if it is 1 , if so, switch the player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // current0El.textContent = currentScore; // this needs to be changed later
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// holding the score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player's score => scores[1] = scores[1]+currentScore
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player's score is >=100
    // finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');

      diceEl.classList.add('hidden');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// resetting the game
btnNew.addEventListener('click', init);
