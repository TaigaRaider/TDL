function DeleteTodo(event) {
    const deleteButton = event.target.closest(".delete-button");
    if (!deleteButton) return;
    const todoItem = deleteButton.closest(".todo-item");
    if (!todoItem) return;
    todoItem.remove();
    updateDashboard();
    UpdateList();
}
function UpdateList() {
    const todoList = document.querySelector(".todo-list");
    const items = todoList.querySelectorAll(".todo-item");
    const noTasks = todoList.querySelector(".no-tasks");

    if (items.length === 0) {
        if (!noTasks) {
            const container = document.createElement("div");
            container.className = "no-tasks";
            container.innerHTML = '<i class="fa-solid fa-clipboard-list"></i>';
            const msg = document.createElement("pre");
            msg.textContent = "No tasks available\nAdd a New Task to get started!";
            container.appendChild(msg);
            todoList.appendChild(container);
            container.style.height = "15rem"; // Adjust height to accommodate the message
        }
    } else {
        if (noTasks) noTasks.remove();
    }
}
function AddTodo() {
    const todoInput = document.getElementById("input-task");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        return;
    }

    const todoList = document.querySelector(".todo-list");
    const id = `task${Date.now()}`;
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    todoItem.innerHTML = `
        <input type="checkbox" id="task${id}" />
        <label for="task${id}">${todoText}</label>
        <button class="delete-button">
            <i class="fa-duotone fa-solid fa-trash"></i>
        </button>
    `;

    todoList.appendChild(todoItem);
    todoInput.value = "";
    updateDashboard();
    UpdateList();
}