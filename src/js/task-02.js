const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const array = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add("item");
  array.appendChild(listEl);
}

console.log(array);
