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

    if (response.ok) {
        var taskList = await response.json();
        taskList.tasks.push(taskToAdd);
        taskList = taskList.tasks;
        console.log(taskList.tasks);
    } else {
        console.log(response);
        return null;
    }

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


export {
    getTasks,
    addTasks
};