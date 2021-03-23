const btn = document.querySelector("button");
const input = document.querySelector("input[type=\"text\"]");
const taskList = document.querySelector("ul");
const taskBoard = document.querySelector(".tasksBoard");
const clear = document.querySelector("a");
refresh();

btn.onclick = function() {
    const taskValue = input.value;
    if (taskValue) {
        let data = getData();
        data.push([taskValue, false]);
        localStorage.setItem("task", JSON.stringify(data));
    }
}

clear.onclick = function() {
    localStorage.clear();
    taskList.innerHTML = "";
}


function getData() {
    const data = localStorage.getItem("task");
    if (data) {
        return JSON.parse(data);
    }
    else {
        return [];
    }
}

function delTask(task) {
    const name = task.querySelector("span:last-child").innerHTML;
    let i;
    let data = getData();

    for (i=0; i<data.length; i++) {
        if (data[i][0] == name) break;
    }
    data.splice(i, 1);
    localStorage.setItem("task", JSON.stringify(data));

    taskList.removeChild(task);
}

function taskChange(value, taskName, i) {
    let data = getData();
    if (value) {
        taskName.style.textDecoration = "line-through";
    }
    else{
        taskName.style.textDecoration = "none";
    }

    data[i][1] = value;
    localStorage.setItem("task", JSON.stringify(data));
}

function refresh() {
    if (window.localStorage) {
        taskBoard.style.display = "block";
    }

    input.focus();
    const data = getData();

    for (let i=0; i<data.length; i++) {
        let task = document.createElement("li");
        let del = document.createElement("span");
        let checkBox = document.createElement("input");
        let taskName = document.createElement("span");

        del.innerHTML = "x";
        del.className = "delete";
        del.onclick = () => delTask(task);
        del.style.userSelect = "none";
        checkBox.type = "checkbox";
        checkBox.onchange = () => taskChange(checkBox.checked, taskName, i);
        checkBox.checked = data[i][1];
        taskChange(checkBox.checked, taskName, i);
        taskName.innerHTML = data[i][0];
        taskName.style.userSelect = "none";

        task.appendChild(del);
        task.appendChild(checkBox);
        task.appendChild(taskName);
        taskList.appendChild(task);
    }
}