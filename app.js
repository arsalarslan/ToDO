console.log("pakistan")

function addtodo() {
    const inptext = document.getElementById("new-task");
    const taskText = inptext.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const tasksll = document.getElementById("task-list"); 

    const taskli = document.createElement("li");

    taskli.innerHTML = `
    <div>
            <input type="checkbox">
            <span onclick="toggleSelectTask(this)">${taskText}</span>
        </div>
        <button onclick="removeTodo(this)"><i class="fas fa-times"></i></button>
    `;
    tasksll.appendChild(taskli);

    inptext.value = ""; 
}


function remtodo(button){
    const task2 = button.parentElement
    task2.remove()
}

function deleteSelected(){
    const tasks = document.getElementById(" task-list")

    const tasklists = document.querySelectorAll("li")

    tasklists.forEach(element =>{
        const checkbox = element.querySelector('input[type="checkbox"]')
        if(checkbox.checked){
            element.remove()
        }
    })

}

