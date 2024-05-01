import { useState } from "react";
import {addPlants} from "../../plantkeeperApi"
import "./Plant.css"

function PlantForm(props) {

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [uname, setUname] = useState(props.uname_in);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const plantToAdd = {
            name: name,
            species: species
        }

        var response = await addPlants(uname, plantToAdd)
        
        if(response == null){
            alert("error");
        }
        window.location.reload();
    }
  
    return (
        <div className = 'form-container'>
            <form onSubmit={handleSubmit}>
            <label>Plant Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Plant Species:
                <input
                    type="text"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                />
            </label>
            <input type="submit" />
            </form>
        </div>
    )

}

export default PlantForm;