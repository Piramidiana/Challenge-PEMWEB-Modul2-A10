const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks(tasksToShow) {
  taskList.innerHTML = "";

  tasksToShow.forEach(function (task) {
    const listItem = document.createElement("li");
    listItem.textContent = task.text;
    taskList.appendChild(listItem);
  });
}

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(newTask);
  renderTasks(tasks);
  taskInput.value = "";
});