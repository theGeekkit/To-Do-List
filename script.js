let todoList = JSON.parse(localStorage.getItem("tasks")) || [];

// let addTaskButton = document.querySelector(".addTaskButton");
// addTaskButton.addEventListener('click', () => {
//     let todoContainer = document.querySelector(".todoContainer");
//     let todoInput = document.createElement("input");
//     todoInput.type = 'text';
    
    
//     let todoCheckBox = document.createElement("input");
//     todoCheckBox.type = 'checkBox';
    
//     todoContainer.appendChild(todoCheckBox)
//     todoContainer.appendChild(todoInput)
// });

let taskButton = document.querySelector("#addTaskButton");
let task = document.querySelector("#taskInput");
taskButton.addEventListener("click", () => {
    
    let taskValue = task.value; 
     todoList.push(taskValue);
     console.log(todoList)
     localStorage.setItem("tasks", JSON.stringify(todoList))
     location.reload()
})

console.log(todoList)





