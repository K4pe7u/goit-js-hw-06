const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

for (const item of listEl) {
  console.log(`Category: ${item.children[0].innerText}`);

  console.log(`Elements: ${item.children[1].children.length}`);
}
