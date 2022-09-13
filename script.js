// function navigate(url) {
//   location.href = url;
// }

class TaskList {
  todoList;
constructor(){
  this.tryToGetTasks();
}

  addNewTask(task) {
    
          this.todoList.push(task);
          this.generateTodoHtml(task)
          this.saveList()

  }

  saveList() {
    localStorage.setItem('tasks', JSON.stringify(this.todoList))
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
    let toDoListContainer = document.querySelector(".toDoListContainer");
    toDoListContainer.innerHTML = ''
    this.todoList.forEach(todo => {
      this.generateTodoHtml(todo)
          
      
    });
   }

   generateTodoHtml(todo) {
    let toDoListContainer = document.querySelector(".toDoListContainer");
    let listAddition = document.createElement("div"); 
    listAddition.textContent = todo; 
    toDoListContainer.appendChild(listAddition);
   }
}

const list = new TaskList()



list.generateTaskList()
let toDoListContainer = document.querySelector(".toDoListContainer");
let taskButton = document.querySelector("#addTaskButton");
let taskInput = document.querySelector("#taskInput");
let taskValue = taskInput.value;

taskButton.addEventListener("click", () => {
  list.addNewTask(taskInput.value)
});





// var div = document.createElement('div');  //creating element
// div.textContent = "Hello, World";         //adding text on the element
// document.body.appendChild(div);           //appending the element



  // generateTaskList()
    
// console.log(todoList);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

