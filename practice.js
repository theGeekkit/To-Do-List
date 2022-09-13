
class TaskList {
    addNewTask(task) {
        const tasks = this.tryToGetTasks();
            console.log(tasks);
            tasks.push(task);
    }
    
    tryToGetTasks() {
        try {
            return JSON.parse(localStorage.getItem("tasks")) || [];
              } catch (e) {
                console.error("Oh no what happened?", e);
                return [];
        }
    }
    generateTaskList() {
  
        let listAddition = document.createElement("div");
       
   
       listAddition.innerText(todoList);
   
       toDoListContainer.appendChild(listAddition);
     }
}


class task {

}

