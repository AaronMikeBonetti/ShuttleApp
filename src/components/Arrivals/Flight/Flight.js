import React from 'react'
import "./flight.css"

export default function Flight(props) {
    return (
        <ul className="flight__container">
          <li className={`flight__img ${props.img}`}></li>  
          <li className="flight__number">{props.num}</li>  
          <li className="flight__etaTime">{props.etaDate}</li>  
          <li className="flight__etaTime">{props.etaTime}</li>  
          <li className="flight__received">{props.received}</li>  
        </ul>
    )
}
