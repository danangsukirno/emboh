let toDoList = [];
let indexToDo = 0;

function add() {
    const containerCheckbox = document.getElementById("containerCheckbox");
    let textToDo = document.getElementById("textToDo");
    const containerItemCheckbox = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const br = document.createElement("br");

    containerItemCheckbox.id = "checkbox"+indexToDo;
    checkbox.type = "checkbox";
    checkbox.id = "id"+indexToDo;
    checkbox.style.marginBottom = "10px";
    checkbox.setAttribute("onclick", "done(this.checked, this.id)");
    label.textContent = textToDo.value;
    toDoList.push(textToDo.value)
    indexToDo++;

    containerCheckbox.append(containerItemCheckbox);
    containerItemCheckbox.append(checkbox);
    containerItemCheckbox.append(label.textContent);

    textToDo.value = "";
}

function done(isChecked, getId) {
    let id = getId.substring(2,5);
    let labelCheckbox = document.getElementById("checkbox"+id);
    if (isChecked) {
        labelCheckbox.style.textDecoration = "line-through";
        labelCheckbox.style.color = "dimgray";
    } else {
        labelCheckbox.style.textDecoration = "none";
        labelCheckbox.style.color = "black";
    }
}