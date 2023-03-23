function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}
let sizeFirstBox = 30
let sizeChanging = 10

const createBoxes = (amount) => {
  const boxes = []

  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement('div')

    createBox.style.width = `${sizeFirstBox} + i * ${sizeChanging} + "px"`
    createBox.style.height = `${sizeFirstBox} + i * ${sizeChanging} + "px"`
    createBox.style.backgroundColor = getRandomHexColor()

    boxes.push(createBox)
  }
  return boxes
}

document.getElementById('boxes').innerHTML(...createBoxes(10))

// let div = document.createElement("div");
// div.append("Some text");

// console.log(div.textContent); // "Some text"

// const START_SIZE = 30
// const INCREMENT_SIZE_VALUE = 10
// const boxesEl = document.querySelector('#boxes')
// const inputEl = document.querySelector('input[type="number"]')
// const createEl = document.querySelector('button[data-create]')
// const destroyEl = document.querySelector('button[data-destroy]')

// //This 'global' let is just to store the increment sizze value (just in case when user first create 5 boxes, and then want to create 10 other boxes)
// let size = START_SIZE

// //Create random color in HEX value function
// const getRandomHexColor = () =>
//   `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`

// const createBoxes = (amount) => {
//   for (let i = 0; i < amount; i++) {
//     const singleBox = document.createElement('div')
//     singleBox.style.width = `${size}px`
//     singleBox.style.height = `${size}px`
//     singleBox.style.backgroundColor = getRandomHexColor()
//     boxesEl.append(singleBox)
//     size += INCREMENT_SIZE_VALUE
//   }
// }

// const destroyBoxes = () => (boxesEl.innerHTML = '')

// createEl.addEventListener('click', () => createBoxes(inputEl.value))

// destroyEl.addEventListener('click', () => {
//   destroyBoxes()
//   inputEl.value = ''
//   size = START_SIZE
// })
