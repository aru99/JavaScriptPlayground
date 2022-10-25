'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const benHold = document.querySelector('.btn--hold');

//
let currentScore;
// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

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
    // change later
    current0El.textContent = currentScore;
  } else {
    // switch to next player
  }
});
