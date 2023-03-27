// generator kolorów (kod 16-tkowy)

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`

// zmienne buttonów inputa przestrzeni na boxy

const createEl = document.querySelector('[data-create]')
const destroyEl = document.querySelector('[data-destroy]')
const inputEl = document.querySelector('#controls input')
const boxesEl = document.querySelector('#boxes')

// zmienne wielkości boxów (mozna zrobić w css)

let startSize = 24
let valueSize = 12

// funkcja iterująca tworząca każdy kolejny box w większym rozmiarze o równą wartość
// *iteracja
// *zmianna tworząca elementy (div)
// *przestrzeń, w której mają znaleźć się kolejno tworzone boxy
// *określenie rozmiarów początkowych i stylizacja kolorem z generatora hex
// *zwiększenie sumy siz'u kolejnego elementu

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const oneBox = document.createElement('div')

    boxesEl.append(oneBox)

    oneBox.style.height = `${startSize}px`
    oneBox.style.width = `${startSize}px`
    oneBox.style.backgroundColor = getRandomHexColor()

    startSize += valueSize
  }
}

// zdarzenia kliknięć
// create kreuje tyle kolejnych boxów ile podano w input (wartosc input'a)
// destroy usuwa zawartość inputa i wszystkie dotąd stworzone boxy - czyści wszystko.
// zeruje wartość siz'u do wartości początkowej

createEl.addEventListener('click', () => createBoxes(inputEl.value))

destroyEl.addEventListener('click', () => {
  inputEl.value = ''
  boxesEl.innerHTML = ''
  startSize = 24
})
