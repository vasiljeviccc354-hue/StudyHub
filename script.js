// NAVIGACIJA IZMEĐU STRANICA
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// DARK / LIGHT MODE
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "Light mode" : "Dark mode";
});

// TO-DO LIST SA LOCALSTORAGE
const todoListEl = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(text => addTodoItem(text));
}

function saveTodos() {
    const todos = Array.from(todoListEl.children).map(li => li.textContent);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodoItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => {
        li.remove();
        saveTodos();
    });
    todoListEl.appendChild(li);
}

function addTodo() {
    const value = todoInput.value.trim();
    if (!value) return;
    addTodoItem(value);
    saveTodos();
    todoInput.value = "";
}

loadTodos();

// POMODORO TIMER
let time = 1500;
let interval = null;

function startPomodoro() {
    if (interval !== null) return;
    interval = setInterval(() => {
        time--;
        updateTimer();
        if (time <= 0) {
            clearInterval(interval);
            interval = null;
            alert("Pomodoro sesija je zavrsena.");
        }
    }, 1000);
}

function resetPomodoro() {
    clearInterval(interval);
    interval = null;
    time = 1500;
    updateTimer();
}

function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer").textContent =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
