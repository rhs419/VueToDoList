window.onload = () => {
    const toDoInput = document.querySelector("#toDoInput");
    const addButton = document.querySelector("#addButton");
    toDoInput.addEventListener("focusin", adding);
    toDoInput.addEventListener("focusout", adding);
    toDoInput.addEventListener("keypress", Event => enter(Event));
    addButton.addEventListener("click", addToDo);
}

class ToDo {
    constructor(id, checked, text) {
        this.id = id;
        this.checked = checked;
        this.todoText = text;
    }
}
function enter(e) {
    const key = e.key || e.keyCode;
    if (key === 'Enter' || key === 13) {
        addToDo();
    }
}
function adding() {
    const label = document.querySelector("#todoLabel");
    label.innerText == "○" ? label.innerText = "+" : label.innerText = "○";
}

function addToDoLS(text) {
    if (localStorage.getItem("number") == null) {
        localStorage.setItem("number", "0");
    }
    const number = localStorage.getItem("number");
    const todo = new ToDo(number, false, text);
    localStorage.setItem(number, JSON.stringify(todo));
    if (localStorage.getItem("number") != null) {
        localStorage.setItem("number", "" + (parseInt(localStorage.getItem("number")) + 1));
    }
    window.dispatchEvent(new Event('storage'));
}
function addToDo() {
    const toDoInput = document.querySelector("#toDoInput");
    if (!(toDoInput.value == null || toDoInput.value.trim() == "")) {
        addToDoLS(toDoInput.value);
    }
    else {
        toDoInput.focus();
    }
    toDoInput.value = "";
}