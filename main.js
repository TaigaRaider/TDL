function canAddTask() {
    const activeFilter = document.querySelector(".active");
    if (activeFilter && activeFilter.id === "filter-completed") {
        alert("Cannot add a new task to the completed section.");
        return false;
    }
    return true;
}

function updateDashboard() {
    const items = document.querySelectorAll(".todo-item");
    const pending = document.querySelectorAll(".todo-item input[type='checkbox']:not(:checked)");
    const completed = document.querySelectorAll(".todo-item input[type='checkbox']:checked");

    document.querySelector("#all .dashboard-item-count").textContent = items.length;
    document.querySelector("#pending .dashboard-item-count").textContent = pending.length;
    document.querySelector("#completed .dashboard-item-count").textContent = completed.length;
}

function filterTasks(filter) {
    document.querySelectorAll(".todo-item").forEach(item => {
        const checked = item.querySelector("input[type='checkbox']").checked;
        if (filter === "all") item.style.display = "flex";
        else if (filter === "pending") item.style.display = checked ? "none" : "flex";
        else if (filter === "completed") item.style.display = checked ? "flex" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-task").addEventListener("click", e =>{
        if (canAddTask()) AddTodo();
    });

    document.getElementById("input-task").addEventListener("keypress", e => {
        if (e.key === "Enter" && canAddTask()) AddTodo();
    });

    document.querySelector(".todo-list").addEventListener("click", e => {
        if (e.target.closest(".delete-button")) DeleteTodo(e);
    });

    document.querySelector(".todo-list").addEventListener("change", () => {
        updateDashboard();
    });

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterTasks(btn.id.replace("filter-", ""));
        });
    });

    updateDashboard();
    UpdateList();
    filterTasks("all");
    document.getElementById("filter-all").classList.add("active");

});
