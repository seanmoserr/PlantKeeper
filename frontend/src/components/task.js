import './task.css';
import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling

function Tasks(tasks) {
    // State to track the selected object
    const [selectedTask, setSelectedTask] = useState(null);

    // Function to handle click on an item
    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div className="task-box">
            <h2>List of Objects</h2>
            <ul className="task">
                {tasks.map((task, plant_name) => (
                    <li
                        key={index}
                        className={selectedTask === index ? 'selected' : ''}
                        onClick={() => handleItemClick(index)}
                    >
                        {tasks}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;

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