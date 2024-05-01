import './home.css';
import { useParams } from "react-router-dom";
import PlantList from "./plant/PlantList";
import PlantForm from "./plant/PlantForm";
import TaskForm from "./task/TaskForm";
import TaskList from "./task/TaskList";

function Home() {
    const {uname} = useParams();

    return(
        <div className="home">
            <PlantList
                uname_in={uname} />
            <PlantForm
                uname_in={uname} />
            <TaskList
                uname_in={uname} />
            <TaskForm
                uname_in={uname} />
        </div>
    );
}


export default Home;