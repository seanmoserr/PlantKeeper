import {Card, CloseButton} from 'react-bootstrap';

const Plant = (props) => {
    const deletePlant = props.delete;

    return (
        <Card>
            <CloseButton className="float-end"
               onClick={() => deletePlant(props.name)} />
            {props.name}:{props.species}
        </Card>
            
    )
}

class plant {
    species = "";
    name = "";

    plant() {
        this.species = "default";
        this.name = "unnamed plant";
    }

    plant(new_name, new_species){
        this.species = new_species;
        this.name = new_name;
    }
}

export default Plant