import './task.css';
import React, { useState } from 'react';
import './task.css';
import {Card, CloseButton} from "react-bootstrap"; // Import your CSS file for styling

const Task = (props) => {
    const deleteTask = props.delete;

    return (
        <Card>
            <CloseButton className="float-end"
                         onClick={() => deleteTask(props.id)} />
            {props.action}:{props.plant_name}:{props.do_by}
        </Card>

    )
}


export default Task;