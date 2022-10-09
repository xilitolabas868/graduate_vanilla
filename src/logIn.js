const logInForm = document.querySelector("#logInForm");
const logInInput = document.querySelector("#logInForm #logInInput");
const greeting = document.getElementById("greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogInSubmit(event) {
  event.preventDefault();
  logInForm.classList.add(HIDDEN_CLASSNAME);
  const username = logInInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showGreetings(username);
}

function showGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  logInForm.classList.remove(HIDDEN_CLASSNAME);
  logInForm.addEventListener("submit", onLogInSubmit);
} else {
  showGreetings(savedUserName);
}
