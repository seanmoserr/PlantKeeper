import './task.css';
const Task = (task) => {
    return (
        <div className="task-box">
            <div className="header">
                <h2>Task</h2>
                <h2>Plant</h2>
                <h2>Due Date</h2>
            </div>
            <div className="task-list">
                <div className="task">
                    <p>task.action</p>
                    <p>task.plant_name</p>
                    <p>task.dateToString()</p>
                </div>
            </div>
        </div>
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