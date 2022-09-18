// function navigate(url) {
//   location.href = url;
// }

class TaskList {
  todoList;
  toDoListContainer = document.querySelector(".toDoListContainer");
  constructor() {
    this.tryToGetTasks();
  }

  addNewTask(task) {
    this.todoList.push(task);
    this.generateTodoHtml(task);
    this.saveList();
  }

  saveList() {
    localStorage.setItem("tasks", JSON.stringify(this.todoList));
  }

  tryToGetTasks() {
    try {
      this.todoList = JSON.parse(localStorage.getItem("tasks")) || [];
    } catch (e) {
      console.error("Oh no what happened?", e);
      this.todoList = [];
    }
  }
  generateTaskList() {
    this.toDoListContainer.innerHTML = "";
    this.todoList.forEach((todo) => {
      this.generateTodoHtml(todo);
    });

    // this.todoList.forEach((todo) => {
    //   this.generateCheckBox(checkbox);
    // });
  }

  generateTodoHtml(todo) {
    // let todoCheckBox = document.createElement("input")
    // todoCheckBox.type = "checkbox"
    // todoCheckBox.className = "checkbox"
    // this.toDoListContainer.appendChild(todoCheckBox)
    
    let listAddition = document.createElement("div");
    listAddition.textContent = todo;
    this.toDoListContainer.appendChild(listAddition);

    listAddition.addEventListener("click", () => {
      
      listAddition.style.textDecoration = "line-through";

      

    })
  }
}


const list = new TaskList();

list.generateTaskList();

let taskButton = document.querySelector("#addTaskButton");
let taskInput = document.querySelector("#taskInput");

taskButton.addEventListener("click", () => {
  list.addNewTask(taskInput.value);
  location.reload()
  // document.createElement();
  


  
});

// document.createElement(checkbox);
// document.body.appendChild(checkbox);

// const cb = document.querySelector('#done');
//   console.log(cb.checked);
