import './home.css';
import { addPlants, deletePlant, getPlants, getTasks, registerUser } from './plantkeeperApi';
import Plant from "./Plant";
import plant from "./Plant";
import task from "./task";
import Tasks from "./task";
import {useEffect, useState} from "react";


function loadTasks(uname){
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        getTasks(uname).then((res) => {
            setTaskList[res]
        })
    }, []);

    const renderTaskList = () => {
        return (
            <span>{Tasks(taskList)}</span>
        );


    }
    /*
    const renderTaskList = () => {
        return taskList.forEach((task) => {
            return <span>{Task(task)}</span>
        })
    }
     */

    return (
        <table>
            <thead>
            <tr>
                <th>To-Do List</th>
            </tr>
            </thead>
            <tbody>{renderTaskList()}</tbody>
        </table>
    );
}

function plantsPreview(uname) {
    var plantList = new Array[plant];

    getPlants(uname).then((res) => {
        plantList[res]
    })

    //get first three plantIDs
    let plant1 = plantList.at(0).id();
    let plant2 = plantList.at(1).id();
    let plant3 = plantList.at(2).id();


    return (
        <div style="border: 2px solid black; padding: 10px; width: 220px; height: 220px;">
            <div style="display: flex; justify-content: space-between;">
                <Plant uname={uname} pname={plant1}/>
                <Plant uname={uname} pname={plant2}/>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                <Plant uname={uname} pname={plant3}/>
                <button onClick = {allPlants(uname)} style="width: 50px; height: 50px;">All Plants</button>
            </div>
        </div>
    );
}

function addTask(uname) {
    return (
        <button onClick= {addTask(uname)} className="task-button">Add Task</button>
    );
}

function removeTask(uname, taskID) {
    return (
        <button onClick={removeTask(uname, taskID)} className="task-button">Remove Task</button>
    );
}


function home(uname) {

    return(
        <div className="home">
            <p>here will output tasks and plants</p>
            {plantsPreview(uname)}
            {loadTasks(uname)}
            <div className=".task-button">
                <p>here will be buttons for the tasks</p>
            </div>
        </div>
    );
}

function allPlants(uname) {
    var plantList = new Array[plant];

    getPlants(uname).then((res) => {
        plantList[res]
    })
    //loop through all of the plants and call plant each time
    return(
        <>
        </>
    );
}

