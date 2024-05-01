import './task.css';
import React, { useState } from 'react';
import './task.css';
import {Card, CloseButton} from "react-bootstrap"; // Import your CSS file for styling

const Task = (props) => {
    const deleteTask = props.delete;

    return (
        <Card>
            <CloseButton className="float-end"
                         onClick={() => deleteTask(props.name)} />
            {props.action}:{props.plant_name}:{props.do_by}
        </Card>

    )
}

class task {
    id = -1;
    action = "";
    plant_name = "";
    do_by = new Date();
    recurring = false;

    constructor(new_id, new_action, new_name, due_date, recurring) {
        this.id = new_id;
        this.action = new_action;
        this.plant_name = new_name;
        this.recurring = recurring;
        this.do_by = due_date;
    }

    dateToString(){
        let date_string = "";

        date_string = this.do_by.toString() ;

        return date_string;
    }

}

export default Task;