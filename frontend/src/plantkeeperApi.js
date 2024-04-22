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

// delete task


export {
    getTasks
};