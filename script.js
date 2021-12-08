'use strict';

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === secrateNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secrateNumber;

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').textContent = secrateNumber;
  } else if (guess > 20) {
    displayMessage(`You can't enter number above 20`)
  } else if (guess < 0) {
    displayMessage(`You can't enter numbers below zero`)
  } else if (guess != secrateNumber) {
    if (score > 1) {
      displayMessage(guess > secrateNumber ? '📈 Too high' : '📉 too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrateNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
