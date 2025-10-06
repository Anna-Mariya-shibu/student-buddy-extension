const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => li.remove()); // click to remove
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
