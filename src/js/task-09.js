function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

// // query na span class = color i button class = change-color

const colorEl = document.querySelector('.color')
const shiftEl = document.querySelector('.change-color')

// // funkcja zmieniająca background color body za pomocą getRandomHexColor:

shiftEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor
  colorEl.innerHTML = randomColor
})

// Przykład:
// const setBg = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;
// }

// genNew.addEventListener("click", setBg);
// setBg();
