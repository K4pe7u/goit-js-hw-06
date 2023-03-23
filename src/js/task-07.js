const inputEl = document.querySelector('#font-size-control')
const textInput = document.querySelector('#text')

// min px do wartości

inputEl.value = inputEl.min

inputEl.addEventListener(
  'input',
  (event) => (textInput.style.fontSize = `${inputEl.value}px`)
)

// dostęp do inputa i spana -> po id
// określenie wartości początkowej dla wartości inputa
// addEventListener ze zdarzeniem input
// odniesienie "outputa" do STYLU (nie textContent)
// start wartości inputa funkcja (od 16min do 96max) -> użycie ${} z jednostką obszaru (px, rem)

// Przykładowy suwak:
// const rangeInput = document.querySelector('input[type="range"]')
// const output = document.querySelector('.js-selected-value');
// rangeInput.addEventListener('input', e => output.textContent = e.target.value)
