
'use strict';

let form = document.querySelector('.login-form');

form.addEventListener('submit', key => {
   key.preventDefault();
   let data = new FormData(key.target);
   let result = {};
   for (let i of key.target) {
      if (i.tagName === "INPUT" && i.value.trim() === "") {
         alert('All form fields must be filled in')
         return;
      } else {
         if (i.tagName === "INPUT") {
            result[i.getAttribute('name')] = data.get(i.getAttribute('name').trim())
         }
      }

   }
   console.log(result)
   form.reset()
})