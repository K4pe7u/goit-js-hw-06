const inputEl = document.querySelector('#validation-input')
const inputLength = inputEl.dataset

inputEl.addEventListener('blur', () => {
  inputEl.value.length === Number(inputLength.length)
    ? (inputEl.className = 'valid')
    : (inputEl.className = 'invalid')
})

//dataset = [data-length] in inputEl
// +inputLength -> length (Number nie string)
