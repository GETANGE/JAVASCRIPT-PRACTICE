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