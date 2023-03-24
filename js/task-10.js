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
