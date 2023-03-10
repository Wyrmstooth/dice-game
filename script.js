'use strict';

const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0');
const score1el = document.querySelector('#score--1');
let score0 = 0;
let score1 = 0;
const currentScore0el = document.querySelector('#current--0');
const currentScore1el = document.querySelector('#current--1');
let currentscore = 0;
let activeplayer = 0;
const diceel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
let winner = 0;

score0el.textContent = 0;
score1el.textContent = 0;
diceel.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (winner == 0) {
    diceel.classList.remove('hidden');
    var diceRoll = Math.trunc(Math.random() * 6 + 1);
    diceel.src = `dice-${diceRoll}.png`;
  }

  if (diceRoll !== 1 && winner == 0) {
    currentscore += diceRoll;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else if (diceRoll == 1 && winner == 0) {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  console.log('button clicked');
  if (activeplayer == 0 && winner == 0) {
    score0 += currentscore;
    score0el.textContent = score0;
    currentscore = 0;
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    if (score0 >= 100) {
      player0el.classList.add('player--winner');
      winner = 1;
    }
  } else if (activeplayer == 1 && winner == 0) {
    score1 += currentscore;
    score1el.textContent = score1;
    currentscore = 0;
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    if (score1 >= 100) {
      player1el.classList.add('player--winner');
      winner = 1;
    }
  }
  if (winner == 0) {
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
  }
});

btnNew.addEventListener('click', function () {
  score0el.textContent = 0;
  score1el.textContent = 0;
  diceel.classList.add('hidden');
  score0 = 0;
  score1 = 0;
  currentscore = 0;
  activeplayer = 0;
  winner = 0;
  currentScore0el.textContent = 0;
  currentScore1el.textContent = 0;
  player0el.classList.add('player--active');
  player1el.classList.remove('player--active');
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--winner');
});
