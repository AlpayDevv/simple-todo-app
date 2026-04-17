let input = document.getElementById("input");
let button = document.getElementById("add");
let list = document.getElementById("list");

button.addEventListener("click", function () {
  let task = input.value.trim();

  if (!task) return;

  let li = document.createElement("li");
  let text = document.createTextNode(task);
  li.appendChild(text);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function () {
    this.parentElement.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});
