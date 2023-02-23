const listElement = document.querySelectorAll("h2");
const count = listElement.length;
console.log(`Number of Category: ${count}`)


const categories = document.querySelectorAll("li.item");
categories.forEach(categories => categories.firstElementChild);
console.log(`Category: ${categories}`)


const element = document.querySelectorAll("li.item")
element.forEach(element => element.lastElementChild.children)
console.log(`Element: ${element.length}`)








