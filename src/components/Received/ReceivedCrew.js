import React from 'react'
import "./received-crew.css"

export default function ReceivedCrew(props) {
    return (
        <ul className="received-crew__container">
            <li className={`received-crew__img ${props.airline}`}></li>
            <li>{props.flightNumber}</li>
            <li>{props.arrivalTime}</li>
            <li>{props.receivedDate}</li>  
        </ul>
    )
}