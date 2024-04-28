import './home.css';
import { addPlants, deletePlant, getPlants, getTasks, registerUser } from './plantkeeperApi';

function loadTasks(uname){
    const taskList = getTasks(uname);
    const rows = [];
    let lastTask = null;
    /*
    taskList.forEach() => {

    }
    */
    lastTask = rows[taskList.length() - 1];

    return (
        <table>
            <thead>
            <tr>
                <th>To-Do List</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function task(uname, taskID){

}

function plantsPreview(uname) {
    const plantList = getPlants(uname);

    //get first three plantIDs
    let plant1 = plantList.at(0).getPlantID();
    let plant2 = plantList.at(1).getPlantID();
    let plant3 = plantList.at(2).getPlantID();

    return (
        <div style="border: 2px solid black; padding: 10px; width: 220px; height: 220px;">
            <div style="display: flex; justify-content: space-between;">
                Plant(uname, plant1)
                Plant(uname, plant2)
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                Plant(uname, plant3);
                <button style="width: 50px; height: 50px;">All Plants</button>
            </div>
        </div>
    );
}

function addTask(uname) {
    return (
        <button className="task-button">Add Task</button>
    );
}

function removeTask(uname, taskID) {
    return (
        <button className="task-button">Remove Task</button>
    );
}

function Plant(uname, pname) {
    return (
        <div className="indPlant">
            <input type="text" placeholder="Enter text..." style="display: block; margin-bottom: 10px;"/>
            <img src="https://via.placeholder.com/50x50" alt="Small Image" width="50" height="50"/>
        </div>
    );

}


function home(uname) {

    return(
        <div className="home">
            <p>here will output tasks and plants</p>
            <div className=".task-button">
                <p>here will be buttons for the tasks</p>
            </div>
        </div>
    );
}

function allPlants(uname) {
    let plants = [];
    //loop through all of the plants and call plant each time
    return(
    );
}

