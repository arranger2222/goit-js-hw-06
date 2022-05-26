const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const makeIngredient = ingredients.map(option =>{
  const ingredient = document.createElement('li');
  ingredient.textContent = option;
  ingredient.classList.add('item');
  return ingredient;
});

ingredientsListRef.append(...makeIngredient);

