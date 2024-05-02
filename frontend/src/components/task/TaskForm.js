import { useState } from "react";
import {addTasks} from "../../plantkeeperApi"
import './task.css'
function TaskForm(props) {

    const [action, setAction] = useState("");
    const [do_by, setDo_by] = useState("");
    const [plant_name, setPlant_name] = useState("");
    const [recurring, setRecurring] = useState("");
    const [uname, setUname] = useState(props.uname_in);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const TaskToAdd= {
            recurring: recurring,
            action: action,
            do_by: do_by,
            plant_name: plant_name
        }

        var response = await addTasks(uname, TaskToAdd)

        if(response == null){
            alert("error");
        }
        window.location.reload();
    }

    return (
        <div  className = "form-container">
            <form onSubmit={handleSubmit}>
                <label>Action:
                    <input
                        type="text"
                        value={action}
                        onChange={(e) => setAction(e.target.value)}
                    />
                </label>
                <label>Plant Name:
                    <input
                        type="text"
                        value={plant_name}
                        onChange={(e) => setPlant_name(e.target.value)}
                    />
                </label>
                <label>due by:
                    <input
                        type="date"
                        value={do_by}
                        onChange={(e) => setDo_by(e.target.value)}
                    />
                </label>
                <label>Reccuring:
                    <input
                        type="checkbox"
                        value={recurring}
                        onChange={(e) => setRecurring(e.target.value)}
                    />
                </label>
                <input type="submit"/>
            </form>
        </div>
    )

}

export default TaskForm;