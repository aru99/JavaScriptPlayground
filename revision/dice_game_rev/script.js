'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// player switch function

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // ->generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   ->display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // -> chsck for rolled 1, if true, switch player
  if (dice != 1) {
    currentScore += dice;
    //  selecting active player dynamically
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // -> add current score to the acitve player's score
  //   scores[1] = scores[1]  currentScore
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  //   ->check if player score is above 100, if so finish game
  //    switch to the next player
  switchPlayer();
});
