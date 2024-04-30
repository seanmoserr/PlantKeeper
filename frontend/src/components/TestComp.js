import { useParams } from "react-router-dom";

function TestComp() {
    const {uname} = useParams();

    return <h1>hello {uname}</h1>;
 }

 export default TestComp;