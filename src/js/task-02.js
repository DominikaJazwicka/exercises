const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsList = ingredients.map(ingredient => ingredient);
console.log(ingredientsList)

const element = document.createElement("li")
element.classList.add("item")

const ingredientsUl = document.querySelector("ul")
ingredientsUl.append(element)
element.append(ingredientsList)
