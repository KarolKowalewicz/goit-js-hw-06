// pobranie listy kategorii i wszystkich ich elementów
const categoriesList = document.querySelector("ul#categories");
const categories = categoriesList.querySelectorAll("li.item");

// iteracja po wszystkich kategoriach
categories.forEach((category) => {
  // pobranie nagłówka i liczby elementów w kategorii
  const header = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("li").length;

  // wyświetlenie informacji w konsoli
  console.log(`${header} contains ${itemCount} items.`);
});

// wyświetlenie liczby kategorii w konsoli
console.log(`There are ${categories.length} categories.`);
