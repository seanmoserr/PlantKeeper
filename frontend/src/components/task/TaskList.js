import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Task from "./task.js";
import { getTasks, deleteTask } from "../../plantkeeperApi";


function TaskList(props) {
    const [tasks, setTasks] = useState([]);
    const [uname, setUname] = useState(props.uname_in);
    const [isLoading, setIsLoading] = useState(true);

    async function deleteFromList(taskid) {
        // Delete message from database
        var newList = await deleteTask(uname, taskid);
        setTasks(newList);
    }

    useEffect(() => {
        async function getAllTasks() {
            const newList = await getTasks(uname);
            setTasks(newList);
            setIsLoading(false);
        }

        getAllTasks();
    }, [uname]);

    return (
        <>
            {isLoading
                ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : tasks.map(task => (
                    <Task id={task.id} action = {task.action} plant_name = {task.plant_name} do_by = {task.do_by}
                           delete={deleteFromList} />
                ))
            }
        </>
    );
}

export default TaskList;