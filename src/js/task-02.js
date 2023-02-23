const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ul = document.querySelector("#ingredients");

ingredients.forEach(listElement => {
  const new1 = document.createElement("li")
  new1.classList.add("item")
  new1.textContent = listElement
  console.log(listElement)
  ul.append(new1)
});
