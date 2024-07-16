const tasks = document.querySelector(".input");
const btn = document.querySelector(".submit");
const taskList = document.querySelector(".task-box");

btn.addEventListener("click", () => {
  const task = tasks.value;
  const div = document.createElement("div");
  const p = document.createElement("p");
  const input = document.createElement("input");
  input.type = "checkbox";
  p.innerText = task;
  div.classList = "list";
  div.append(input, p);
  taskList.append(div);
});
