const inputName = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')

inputName.addEventListener('input', (event) => {
  if (event.currentTarget.value) {
    outputName.textContent = event.currentTarget.value
  } else {
    outputName.textContent = 'anonymous'
  }
})

// Przykład 2 (wersja skrócona):
// inputName.addEventListener("input", (event) =>
// event.currentTarget.value
// ? (outputName.textContent = event.currentTarget.value)
// : (outputName.textContent = "anonymous")

// if (outputName.textContent = event.currentTarget.value)
// else (outputName.textContent = "anonymous")

// inputName.addEventListener("input", (event) => {
// output.textContent = event.currentTarget.value;
//  wszystko w inputcie przepisuje się w output
