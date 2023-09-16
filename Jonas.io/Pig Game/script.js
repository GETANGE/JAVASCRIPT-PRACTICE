'use strict';
// selecting elements .
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El= document.getElementById('current--0');
const current1El= document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//initial score .
const scores=[0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
let playing= true;


let currentScore = 0;
let activePlayer = 0;

//hiding the dice class .
diceEl.classList.add('hidden');

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    currentScore=0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

//rolling the dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){
     // 1 .Genarate a random dice roll.(number)
    const dice = Math.trunc(Math.random() * 6)+1;

    // 2 .Display the dice rolled.
    diceEl.classList.remove('hidden');
    diceEl.src =`dice-${dice}.png`;

    // 3 . check whether the dice rolled 1 : if true, switch to the next player.
    if(dice !== 1){
        //Add dice to the current score.
        currentScore =currentScore+dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        current0El.textContent = currentScore;
    }else{
        //switch to the next player.

        switchPlayer();
    }
 }
})


//TODO: FIX THE BUG detected here.
// implementing the hold button .
btnHold.addEventListener("click",function(){
    if(playing){
    // 1. Add current score to active player's score
    scores[activePlayer] += scores[activePlayer]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    // 2. Check if player's score is >= 20
    if(scores[activePlayer] >= 20){
    // 3. Finish the game
    document.querySelector(`.player--${activePlayer}`).classList.add('.player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('.player--active');
    }else{
        switchPlayer();
    }
    // 4 -Switch to the next player.

    }
});

//TODO: SOLVE THE BUG  and implement this functonality.
// resetting the game functionality.
btnNew.addEventListener('click', function(){
player0El.textContent = 0
player1El.textContent = 0
score0El .textContent = 0
score1El .textContent = 0
current0El.textContent = 0
current1El.textContent = 0
})