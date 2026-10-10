'use strict';

let input = document.getElementById("name-input");
let span = document.getElementById("name-output")

input.addEventListener('input', key => {
   if (key.target.value.trim().length > 0) {
      span.textContent = key.target.value;
   } else {
      span.textContent = "Anonymous";
   }


})