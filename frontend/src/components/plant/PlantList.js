import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Plant from "./Plant";
import { getPlants, deletePlant } from "../../plantkeeperApi";

function PlantList(props) {
   const [plants, setPlants] = useState([]);
   const [uname, setUname] = useState(props.uname_in);
   const [isLoading, setIsLoading] = useState(true);

   async function deleteFromList(plantName) {
      // Delete message from database
      var newList = await deletePlant(uname, plantName);
      setPlants(newList);
   }

   useEffect(() => {
      async function getAllPlants() {
         const newList = await getPlants(uname);
         setPlants(newList);
         setIsLoading(false);
      }

      getAllPlants();
   }, [uname]);

   return (
      <>
         {isLoading
            ? (
               <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </Spinner>
            ) : plants.map(plant => (
               <Plant name={plant.name} species={plant.species}
                  delete={deleteFromList} />
            ))
         }
      </>
   );
}

export default PlantList;

