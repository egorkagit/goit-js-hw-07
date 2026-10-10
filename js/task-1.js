'use strict';

let categories = document.getElementById('categories');
let categoriesChild = Array.from(categories.children);

console.log(`Number of categories: ${categoriesChild.length}`)
categoriesChild.forEach(element => {
   console.log(`Category: ${element.querySelector('h2').textContent}`);
   console.log(`Elements: ${element.querySelector('ul').children.length}`);
});