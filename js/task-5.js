'use strict';

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}



let btn = document.querySelector('.change-color');
let span = document.querySelector('.color');
btn.addEventListener('click', elem => {
   document.querySelector('body').style.backgroundColor = getRandomHexColor();
   span.textContent = getRandomHexColor();
})


