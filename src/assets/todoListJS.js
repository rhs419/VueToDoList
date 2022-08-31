window.onload = () => {
    const delButton = document.getElementsByClassName("delButton");
    const todoCheck = document.getElementsByClassName("todoCheck");
    Array.from(delButton).forEach(function(element) {
        element.addEventListener("click", delToDoLS);
    });
    Array.from(todoCheck).forEach(function(element) {
        element.addEventListener("click", toDoDone);
    });
}
function toDoDone() {
    let id = this.id;
    console.log(id);
    id = id.replace("todoCheck", "todoLabel");
    id = id.replace("todoLabel", "");
    const data = JSON.parse(localStorage.getItem(id));
    if (this.checked == true) {
        data.checked = true;
        localStorage.setItem(id, JSON.stringify(data));
    }
    else {
        data.checked = false;
        localStorage.setItem(id, JSON.stringify(data));
    }
    window.dispatchEvent(new Event('storage'));
}
function delToDoLS() {
    localStorage.removeItem(this.id);
    window.dispatchEvent(new Event('storage'));
}