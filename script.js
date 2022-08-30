let addTaskButton = document.querySelector(".addTaskButton");
addTaskButton.addEventListener('click', () => {
    let todoContainer = document.querySelector(".todoContainer");
    let todoInput = document.createElement("input");
    todoInput.type = 'text';
    
    
    let todoCheckBox = document.createElement("input");
    todoCheckBox.type = 'checkBox';
    
    todoContainer.appendChild(todoCheckBox)
    todoContainer.appendChild(todoInput)
});









