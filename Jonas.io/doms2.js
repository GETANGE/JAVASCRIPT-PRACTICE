'use strict';

 // PROJECT 2 : Modal Window .
 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModal = document.querySelector('.close-modal');
 const btnOpenModal = document.querySelectorAll('.show-modal');
 console.log(btnOpenModal);

 //function to open the modal.
 const openModal= function(){
        //display the modal window.
        modal.classList.remove('hidden');
        //adding the blur effect to the modal window
        overlay.classList.remove('hidden');
 }
  // function to close the modal window
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
 }

 for(let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
 }

 btnCloseModal.addEventListener('click', closeModal);

 overlay.addEventListener('click', closeModal);

 // adding the 'Esc' functionality .
 document.addEventListener('keydown',function(e){
   console.log(e.key);

    if(e.key === 'Escape'){
      if(!modal.classList.contains('hidden')){
         closeModal();
      }
    }
 })