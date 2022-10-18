const todoList = document.querySelector(".todo-list");
const ipt = document.querySelector(".ipt");
todoList.innerHTML = localStorage.getItem("todoHTML");
ipt.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const divEl = document.createElement("div");
    divEl.classList.add("todo");
    divEl.innerText = ipt.value;
    todoList.prepend(divEl);
    ipt.value = "";
    localStorage.setItem("todoHTML", todoList.innerHTML);
  }
});

todoList.addEventListener("auxclick", (e) => {
  if (e.button === 1) {
    e.target.classList.toggle("finished");
  }
  localStorage.setItem("todoHTML", todoList.innerHTML);
});

todoList.addEventListener("click", (e) => {
  e.target.remove();
  localStorage.setItem("todoHTML", todoList.innerHTML);
});
