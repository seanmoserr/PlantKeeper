const apiEndpoint = "http://localhost:8000/api/users";

// register user

// get plant list

// add new plant

// delete plant

// get tasks lists
async function getTasks(uname) {
    const response = await fetch(`${apiEndpoint}/${uname}`);
    if (response.ok) {
        var test = await response.json();
        console.log(test.tasks);
        return test.tasks;
    }
    else {
       console.log(response);
       return null;
    }
 }
// add new task

async function addTasks(uname, taskToAdd) {
    const response = await fetch(`${apiEndpoint}/${uname}`);
    var taskList;

    if (response.ok) {
        taskList = await response.json();
        taskList.tasks.push(taskToAdd);

        taskList = taskList.tasks;
    } else {
        console.log(response);
        return null;
    }

    console.log(taskList);
    
    const update = await fetch(`${apiEndpoint}/${uname}`, {
        method: "PUT",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                tasks:taskList
            }
        ),
     })

     if (update.ok) {
        return taskList;
     }
     else {
        console.log(update);
        return null;
    }
}

// delete task
async function deleteTask(uname, taskID) {

    // get user object
    const response = await fetch(`${apiEndpoint}/${uname}`);

    // if ok get task array
    if (response.ok) {
        var taskList = await response.json();

        if (taskID === -1){ // if id -1 then remove all tasks
            taskList = [];
        } else {
            // filter tasklist to everything but object with x id
            taskList = taskList.tasks.filter((obj) => {
                return obj.id !== taskID;
            })

        }
        console.log(taskList);
    } else {
        console.log(response);
        return null;
    }

    // send update req with updated tasklist
    const update = await fetch(`${apiEndpoint}/${uname}`, {
        method: "PUT",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                tasks:taskList
            }
        ),
     })

     if (update.ok) {
        return taskList;
     }
     else {
        console.log(update);
        return null;
    }
}

export {
    getTasks,
    addTasks,
    deleteTask
};