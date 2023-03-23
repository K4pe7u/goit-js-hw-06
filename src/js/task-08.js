// dostanie się do form i inputów (query) (button typ=sumbit)

const formLoad = document.querySelector('.login-form')

const inputEmail = formLoad.elements[0]
const inputPassword = formLoad.elements[1]

// console.log(inputEmail)
// console.log(inputPassword)

// // funkcja z alertem, porównanie wartości inputów do "", callback alertu, else z wyrzuceniem danych w formie obiektu, jeśli pola uzupełniono.

const checkData = (event) => {
  event.preventDefault()

  if (inputEmail.value === '' || inputPassword.value === '') {
    return alert('Uzupełnij wszystkie pola!')
  } else {
    const data = {
      email: inputEmail.value,
      password: inputPassword.value,
    }
    console.log(`email: ${data.email}, password: ${data.password}`)
    console.log(data)
    formLoad.reset()
  }
}
// //funkcja zdarzenie sumbit ma się wykonywać dla form nie buttona!!!

// Przykład na submit
formLoad.addEventListener('submit', checkData)

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
