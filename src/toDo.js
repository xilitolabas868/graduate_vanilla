const toDoInputForm = document.querySelector("#toDoInputForm");
const toDoNew = document.querySelector("#toDoNew");
const toDoList = document.querySelector("#toDoList");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDos(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id, 10));
  saveToDos();
}

function onToDoNewSubmit(event) {
  event.preventDefault();
  const newToDo = toDoNew.value;
  toDoNew.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  li.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDos);
  li.appendChild(button);
  toDoList.appendChild(li);
}

toDoInputForm.addEventListener("submit", onToDoNewSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
