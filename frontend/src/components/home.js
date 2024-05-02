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
            <div className="welcome">Welcome, {uname}!</div>
            <div className="component-container">
                <div className="form-container">
                    <PlantForm uname_in={uname}/>
                </div>
                <div className="list-container">
                    <PlantList uname_in={uname}/>
                </div>
                <div className="form-container">
                    <TaskForm uname_in={uname}/>
                </div>
                <div className="list-container">
                    <TaskList uname_in={uname}/>
                </div>
            </div>
        </div>
    );
}


export default Home;