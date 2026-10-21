let tasks = [];
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const newTask = {
        id: Date.now(),
        text: taskText,
        isCompleted: false
    };

    tasks.push(newTask);
    renderTask(newTask);
    taskInput.value = "";
});

function renderTask(task) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = task.id;

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    completeBtn.addEventListener("click", function() {
        task.isCompleted = !task.isCompleted;

        if (task.isCompleted) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
            completeBtn.textContent = "Undo";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
            completeBtn.textContent = "Complete";
        }
    });
    deleteBtn.addEventListener("click", function() {
        li.remove();
        tasks = tasks.filter(t => t.id !== task.id);
    });
    li.appendChild(span);
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(btnGroup);

    todoList.appendChild(li);
}

taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTaskBtn.click();
    }
});