'use strict';

// document.querySelector('.message').textContent = `correct number 🎉`;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //converting the retrieved user input to number
  const guess = Number(document.querySelector('.guess').value);

  //   checking if there is any input or not
  //logic: if there is no input, we will get 0 as a response, now 0 is a falsy value, but we want something to happen when there is 0 as a response, thus we negate the falsy value to convert into truthy value
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number entered !`;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🎉 Correct Number`;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = `📈 Too High`;
    // reducing the score value
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = `📉 Too low`;
    // reducing the score value
    score--;
    document.querySelector('.score').textContent = score;
  }
});
