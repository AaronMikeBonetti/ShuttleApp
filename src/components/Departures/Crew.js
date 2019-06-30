import React from 'react'
import "./crew.css"

export default function Crew(props) {
    return (
        <ul className={props.isQuarterHour?`crew__container quarter__hour__class`:`crew__container `}>
            <li className={`crew__img ${props.airline}`}></li>
            <li>{props.crewDepartureTime}</li>
            <li>{props.crewAmount}</li> 
        </ul>
    )
}
