function DeleteTodo(event) {
    const deleteButton = event.target.closest(".delete-button");
    if (!deleteButton) return;
    const todoItem = deleteButton.closest(".todo-item");
    if (!todoItem) return;
    todoItem.remove();
    updateDashboard();
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
}