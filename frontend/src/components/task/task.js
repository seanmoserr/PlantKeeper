import './task.css';
import React, { useState } from 'react';
import './task.css';
import {Card, CloseButton} from "react-bootstrap"; // Import your CSS file for styling

const Task = (props) => {
    const deleteTask = props.delete;
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

    const plantNameStyle = {
        color: '#198754' // Dark Green
    };

    const doByStyle = {
        color: '#333'
    };

    return (
        <Card style = {cardStyle}>
            <CloseButton style = {closeButtonStyle} className="float-end"
                         onClick={() => deleteTask(props.id)}/>
            <span style = {cardContentStyle}>{props.action} {props.plant_name} by {props.do_by}</span>
        </Card>
)
}


export default Task;