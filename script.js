function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

/* Light / Dark mode */
const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggle.textContent = "Light mode";
    } else {
        toggle.textContent = "Dark mode";
    }
});

/* To-Do lista */
function addTodo() {
    const input = document.getElementById("todoInput");
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", () => {
        li.remove();
    });

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}

/* Pomodoro tajmer */
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
