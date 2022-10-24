'use strict';

// document.querySelector('.message').textContent = `correct number 🎉`;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//------------------EventListener for Playing the game------------------
document.querySelector('.check').addEventListener('click', function () {
  //converting the retrieved user input to number
  const guess = Number(document.querySelector('.guess').value);

  //   checking if there is any input or not
  //logic: if there is no input, we will get 0 as a response, now 0 is a falsy value, but we want something to happen when there is 0 as a response, thus we negate the falsy value to convert into truthy value
  if (!guess) {
    // document.querySelector('.message').textContent = `⛔ No number entered !`;
    displayMessage(`⛔ No number entered !`);
  }
  //   When player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `🎉 Correct Number`;
    displayMessage(`🎉 Correct Number`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b437';
    document.querySelector('.number').style.width = '30rem';

    // highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //   when guess wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? `📈 Too High` : `📉 Too low`;
      displayMessage(guess > secretNumber ? `📈 Too High` : `📉 Too low`);
      // reducing the score value
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = `😵 Game Over`;
      displayMessage(`😵 Game Over`);
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `📈 Too High`;
  //       // reducing the score value
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `😵 Game Over`;
  //     }
  //   }
  //   //   when guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `📉 Too low`;
  //       // reducing the score value
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `😵 Game Over`;
  //     }
  //   }
});

//------------------Eventlistener for Resetting the game------------------

document.querySelector('.again').addEventListener('click', function () {
  // Hide & reset Secret number and reset width
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').style.width = `15rem`;
  // remove value from the input field
  document.querySelector('.guess').value = '';
  // reset message
  //   document.querySelector('.message').textContent = `Start guessing ...`;
  displayMessage(`Start guessing ...`);

  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  // reset backgroundColor
  document.querySelector('body').style.backgroundColor = `#222`;
});
