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
const random = Math.trunc(Math.random()*20)+1; // random number from 1-20
document.querySelector('.number').textContent = random;

let button=document.querySelector('.check');
//add eventListener.
button.addEventListener('click', function(){
    // convert the string to a number .
    let number =Number(document.querySelector('.guess').value);
    console.log(number,typeof number);

    // if there is no value.
    if(!number){
        document.querySelector('.message').textContent = 'No number selected';
    }else if(number === random){
        document.querySelector('.message').textContent = 'Correct number';
    }else if (number > random){
        if(score > 0){
            document.querySelector('.message').textContent = 'Number is too high !';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
           document.querySelector('.message').textContent = 'You lost !';
        }
    }else{
        document.querySelector('.message').textContent = 'Too Low !';
        score--;
        document.querySelector('.score').textContent = score; 
    }
})