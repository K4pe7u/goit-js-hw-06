let counterValue = 0

const decreasingEl = document.querySelector("[data-action='decrement']")
const valueNumber = document.querySelector('#value')
const increasingEl = document.querySelector("[data-action='increment']")

decreasingEl.addEventListener('click', () => {
  valueNumber.textContent = --counterValue
})

increasingEl.addEventListener('click', () => {
  valueNumber.textContent = ++counterValue
})

// klikanie - zdarzenie =>
// const button = document.querySelector("..."");

// button.addEventListener("click", () => {
//   valueNumber.value? = counterValue - 1 or +1 ? ++ --?
// });
// let=i;i>=10; <br>i++</br>
