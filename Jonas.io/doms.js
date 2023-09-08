'use strict'
//USES OF TEXTCONTENT.

// 1) used to show the text content in the assigned class name.
let text= document.getElementsByClassName("myElement").textContent;
console.log(text);

// 2) Setting the text content of an element
let text2 = document.getElementsByClassName("myElement").textContent = 'Manudev';
console.log(text2);

// 3) Updating the text content of an element dynamically
let text3 = 'Manudev';
let elements = document.getElementsByClassName("myElement"); // nodelist - false array.

for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = text3;
  }

// 4) Removing the text content of an element
let text4 = '';
let element = document. getElementsByClassName('remove');

for (let i=0; i< element.length; i++) {
    element[i].textContent = text4;
}

// 5) Checking if an element has any text content
if(document.getElementsByClassName('label-score').textContent !== ''){
    console.log(`there is a text content`);
}else{
    console.log(`No text content`);
}

//real life application .
//implementation of the logic.
let score = 20;
let highscore = 0;

const random = Math.trunc(Math.random()*20)+1; // random number from 1-20
console.log(random);

let button=document.querySelector('.check');

//add eventListener.
button.addEventListener('click', function(){
    let messageText = document.querySelector('.message');
    let bodyText = document.querySelector('body');
    let numberText = document.querySelector('.number');
    let scoreText = document.querySelector('.score');
    let highScore = document.querySelector('.highscore');

    // convert the string to a number .
    let number =Number(document.querySelector('.guess').value);
    console.log(number,typeof number);

    // if there is no value.
    if(!number){
        messageText.textContent = 'No number selected';

        // when the player wins 
    }else if(number === random){
        numberText.textContent = random;
        messageText.textContent = 'Correct number !';
        
        bodyText.style.backgroundColor = '#60b347';
        numberText.style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            highScore.textContent =highscore;
        }
        //when the player goes too high.
    }else if (number > random){
        if(score > 0){
            messageText.textContent = 'Number is too high !';
            // decrement the score per click.
            score--;

            scoreText.textContent = score;
            bodyText.style.backgroundColor = '#222';

        }else{
           messageText.textContent = 'You lost the game !';
           scoreText.textContent = 0 ;
           bodyText.style.backgroundColor = '#222';
        }

        //when the player goes too low .
    }else if(number < random){
        messageText.textContent ='Number is too low!';
        score-- ;

        scoreText.textContent = score ;
        bodyText.style.backgroundColor = '#222';

        if(score < 0){
            scoreText.textContent = 0 ;
            messageText.textContent = 'You lost the game !';
            bodyText.style.backgroundColor = '#222';
        }
    }
});

// reset functionality .

    let again = document.querySelector('.again');
    again.addEventListener('click', function(e){
        let messageText = document.querySelector('.message'); 
        let scoreText = document.querySelector('.score');
        let numberText = document.querySelector('.number');
        let guessText = document.querySelector('.guess');
        let bodyText = document.querySelector('body');
    
        // restore initial values of the score .
       let score = 20;
       let random = Math.trunc(Math.random()*20)+1;
    
        messageText.textContent = 'Start guessing...';
        scoreText.textContent = score;
        numberText.textContent ='?'
        bodyText.style . backgroundColor ='#222';
        numberText.style.width =' 15rem';
        guessText.value = '';
    });