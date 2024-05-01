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

export default Plant