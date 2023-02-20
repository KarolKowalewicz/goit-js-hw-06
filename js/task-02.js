const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// pobranie listy ul#ingredients
const ingredientsList = document.querySelector("ul#ingredients");

// utworzenie tablicy elementów <li> i dodanie ich do listy
const ingredientsItems = ingredients.map((ingredient) => {
  // utworzenie nowego elementu <li>
  const item = document.createElement("li");
  // ustawienie zawartości tekstowej na nazwę składnika
  item.textContent = ingredient;
  // dodanie klasy "item"
  item.classList.add("item");
  return item;
});

// dodanie wszystkich elementów <li> do listy ul#ingredients
ingredientsList.append(...ingredientsItems);
