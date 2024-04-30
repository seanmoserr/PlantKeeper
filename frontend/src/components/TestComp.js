import { useParams } from "react-router-dom";
import PlantList from "./plant/PlantList";
import PlantForm from "./plant/PlantForm";

function TestComp() {
    const {uname} = useParams();

    return (
        <>
        <h1>hello {uname}</h1>
        <PlantList
         uname_in={uname} />
         <PlantForm
          uname_in={uname} />
         </>
    );
 }

 export default TestComp;