tasks = [
    {name:"Ayush", task:"task1", status:"todo"},
    {name:"Ayush", task:"task2", status:"inprogress"},
    {name:"Ayush", task:"task2.1", status:"inprogress"},
    {name:"Ayush", task:"task3", status:"done"}

];


// This function oads all tasks fron the array above
function loadTasks() {
    for(i = 0; i < tasks.length; i++){
        entry = tasks[i];
        output = `<div key="${i}">${entry.name}: ${entry.task}</div>`;

        document.getElementById(entry.status).innerHTML += output;
    }

}

// This function alowns you to delete a task
function addtask() {
    tasks += {name: document.getElementById("name").value, task: document.getElementById("task").value, status: document.getElementById("status").value};
    // console
}