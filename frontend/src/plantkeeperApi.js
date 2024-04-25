const apiEndpoint = "http://localhost:8000/api/users";

// register user
//creates correct route for app to POST to apiEndpoint/uname but creates 400 bad request

async function registerUser(uname) {
    const options = { 
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(uname)
  }    
  
  fetch(`${apiEndpoint}/${uname}`, options)
    .then(response => {
       console.log(uname)        
       if (response.ok) {
           return response.json();
         } else {
            throw new Error('Something went wrong ...');
         }
    })
};

// get plant list
/**
 * Get plant list from specified user from database
 * @param {String} uname username of user
 * @returns array of uname's current plants or null on error
 */
async function getPlants(uname) {
    const response = await fetch(`${apiEndpoint}/${uname}`);
    if (response.ok) {
        var test = await response.json();
        console.log(test.plants);
        return test.plants;
    }
    else {
       console.log(response);
       return null;
    }
 }



// add new plant
/**
 * Add a task to specified user's tasklist in database.
 * @param {String} uname username of user
 * @param {TaskObj} plantToAdd plant to add
 * @returns updated array of uname's plants or null on error
 */
async function addPlants(uname, plantsToAdd) {
    const response = await fetch(`${apiEndpoint}/${uname}`);
    var plantsList;

    if (response.ok) {
        plantsList = await response.json();
        plantsList.plants.push(plantsToAdd);

        plantsList = plantsList.plants;
        console.log(JSON.stringify(uname), plantsList.plants);
    } else {
        console.log(response);
        return null;
    }

    console.log(plantsList);
    
    const update = await fetch(`${apiEndpoint}/${uname}`, {
        method: "PUT",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                plants:plantsList
            }
        ),
     })

     if (update.ok) {
        //check
        console.log(plantsList);
        return update;
     }
     else {
        console.log(plantsList);
        return null;
    }
}

// delete plant
/**
 * Delete a task from a specified user's tasklist in database.
 * @param {String} uname username of user
 * @param {Int} plantID id of plant to delete (-1 to delete all plants)
 * @returns updated array of uname's tasks or null on error
 */
async function deletePlant(uname, plantID) {

    // get user object
    const response = await fetch(`${apiEndpoint}/${uname}`);

    // if ok get task array
    if (response.ok) {
        var plantsList = await response.json();

        if (plantID === -1){ // if id -1 then remove all plants
            plantsList = [];
        } else {
            // filter tasklist to everything but object with x id
            plantsList = plantsList.plants.filter((obj) => {
                return obj.id !== plantID;
            })

        }
        console.log(plantsList);
    } else {
        console.log(response);
        return null;
    }

    // send update req with updated plantslist
    const update = await fetch(`${apiEndpoint}/${uname}`, {
        method: "PUT",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                plants:plantsList
            }
        ),
     })

     if (update.ok) {
        return plantsList;
     }
     else {
        console.log(update);
        return null;
    }
}

/**
 * Get task list from specified user from database
 * @param {String} uname username of user
 * @returns array of uname's current tasks or null on error
 */
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

/**
 * Add a task to specified user's tasklist in database.
 * @param {String} uname username of user
 * @param {TaskObj} taskToAdd task to add
 * @returns updated array of uname's tasks or null on error
 */
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

/**
 * Delete a task from a specified user's tasklist in database.
 * @param {String} uname username of user
 * @param {Int} taskID id of task to delete (-1 to delete all tasks)
 * @returns updated array of uname's tasks or null on error
 */
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
    deleteTask,
    registerUser,
    getPlants,
    addPlants,
    deletePlant
};