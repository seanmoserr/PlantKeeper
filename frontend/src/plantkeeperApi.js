const apiEndpoint = "http://localhost:8000/api/users";
const bcrypt = require("bcryptjs");

// register user

// get check valid user
/**
 * Registers User
 * @param {String} uname username of user
 * @param {String} pass password of user
 * @returns bool if user is logged in
 */
async function registerUser(uname, pass) {
    var userDoesntExist = await checkUser(uname, pass);
    if(userDoesntExist[1] === "User doesn't exist."){
        let hashedPass = bcrypt.hashSync(pass, 10);

        const newUser = {
            uname: uname,
            pass: hashedPass,
            plants: [],
            tasks: []
        }
    
        const options = { 
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
      }    
      
      fetch(`${apiEndpoint}`, options)
        .then(response => {     
           if (response.status === 204) {
               return true;
             } else {
                return false;
             }
        })
    }
    else {
        return false;
    }
};

// get check valid user
/**
 * Checks if uname exists and password matches
 * @param {String} uname username of user
 * @param {String} pass password of user
 * @returns array, array[0] is if pass or fail, array[1] error message
 */
async function checkUser(uname, pass){
    const response = await fetch(`${apiEndpoint}/${uname}`);
    if(response.ok) {
        var user = await response.json();
        if(user == null) {
            return [false, "User doesn't exist."];
        }
        if(bcrypt.compareSync(pass, user.pass)){
            return [true, "success"];
        } else {
            return console.log([false, "User/password combo matched a user but used the wrong password."]);
        }
    } 
}

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
        return test.plants;
    }
    else {
       return null;
    }
 }

// add new plant
/**
 * Add a task to specified user's tasklist in database.
 * @param {String} uname username of user
 * @param {PlantObj} plantToAdd plant to add
 * @returns updated array of uname's plants or null on error
 */
async function addPlants(uname, plantsToAdd) {
    // check plant name

    const response = await fetch(`${apiEndpoint}/${uname}`);
    var plantsList;
    if (response.ok) {
        plantsList = await response.json();
        const existingPlant = plantsList.plants.find(plant => plant.name === plantsToAdd.name);
        if (existingPlant) {
            // reject an existing plant name
            return null;
        }
        plantsList.plants.push(plantsToAdd);

        plantsList = plantsList.plants;
        //log the plant object added to console
    } else {
        return null;
    }

    // update plant list
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
        return plantsList;
     }
     else {
        return null;
    }
}

// delete plant
/**
 * Delete a task from a specified user's tasklist in database.
 * @param {String} uname username of user
 * @param {String} plantID name of plant to delete (-1 to delete all plants)
 * @returns updated array of uname's tasks or null on error
 */
async function deletePlant(uname, plantName) {

    // get user object
    const response = await fetch(`${apiEndpoint}/${uname}`);

    // if ok get task array
    if (response.ok) {
        var plantsList = await response.json();

        if (plantName === -1){ // if id -1 then remove all plants
            plantsList = [];
        } else {
            // filter tasklist to everything but object with x id
            plantsList = plantsList.plants.filter((obj) => {
                return obj.name !== plantName;
            })

        }
    } else {
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
        return test.tasks;
    }
    else {
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
        taskList.tasks.sort((a,b) =>{
            return a.id - b.id;
        });
        // get id of last task and update accordingly
        if(taskList.tasks.length === 0){
            taskToAdd.id = 0;
        } else {
            taskToAdd.id = ((taskList.tasks[taskList.tasks.length - 1]).id) + 1;
        }
        taskList.tasks.push(taskToAdd);

        taskList = taskList.tasks;
    } else {
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
    } else {
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
    deletePlant,
    checkUser
};