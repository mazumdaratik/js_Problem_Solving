function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    let task = taskInput.value;

    const li = document.createElement("li");
    li.innerText = task;

    const completeBtn = document.createElement('button');
    completeBtn.innerText = "☑";
    completeBtn.style.marginLeft = "10px";
    completeBtn.onclick = function(){
        li.classList.toggle("complete")
    }

    li.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "10px"
    deleteBtn.onclick = function(){
        li.remove();
    }
    
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

//Event Listener


