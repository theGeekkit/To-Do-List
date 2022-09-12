let todoList = JSON.parse(localStorage.getItem("tasks")) || [];

let toDoListContainer = document.querySelector(".toDoListContainer");
let taskButton = document.querySelector("#addTaskButton");
let taskInput = document.querySelector("#taskInput");
let taskValue = taskInput.value;

taskButton.addEventListener("click", () => {
 
  todoList.push(taskValue);
  
  localStorage.setItem("tasks", JSON.stringify(todoList));
});


  function generateTaskList() {
  
    let listAddition = document.createElement("div");

    listAddition.innerText(todoList[0]);

    toDoListContainer.appendChild(listAddition);
  }

  generateTaskList()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// console.log(todoList);

// function navigate(url) {
//   location.href = url;
// }

// function addTask(task) {
//   const tasks = tryToGetTasks();
//   console.log(tasks);
//   tasks.push(task);

//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function tryToGetTasks() {
//   try {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
//   } catch (e) {
//     console.error("Oh no what happened?", e);
//     return [];
//   }
// }