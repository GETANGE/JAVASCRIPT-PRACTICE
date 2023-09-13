'use strict';
// selecting elements .
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El= document.getElementById('current--0');
const current1El= document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//initial score .
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;

//hiding the dice class .
diceEl.classList.add('hidden');

//rolling the dice functionality
btnRoll.addEventListener('click', function(){
    // 1 .Genarate a random dice roll.(number)
    const dice = Math.trunc(Math.random() * 6)+1;

    // 2 .Display the dice rolled.
    diceEl.classList.remove('hidden');
    diceEl.src =`dice-${dice}.png`;

    // 3 . check whether the dice rolled 1 : if true, switch to the next player.
    if(dice !== 1){
        //Add dice to the current score.
        currentScore += dice;
        current0El.textContent = currentScore;
    }else{
        //switch to the next player.
        currentScore += dice;
        current1El.textContent = currentScore;
    }
})