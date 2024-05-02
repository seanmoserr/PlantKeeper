import {Card, CloseButton} from 'react-bootstrap';

const Plant = (props) => {
    const deletePlant = props.delete;
    const cardStyle = {
        backgroundColor: '#e8f6e8',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const closeButtonStyle = {
        color: '#888',
        cursor: 'pointer'
    };

    const cardContentStyle = {
        color: '#333',
        fontSize: '18px'
    };

    return (
        <Card style = {cardStyle}>
            <CloseButton style = {closeButtonStyle} className="float-end"
               onClick={() => deletePlant(props.name)} />
            <span style = {cardContentStyle}>{props.name} {props.species}</span>
        </Card>
            
    )
}

export default Plant