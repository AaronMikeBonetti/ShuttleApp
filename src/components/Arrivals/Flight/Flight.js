import React from 'react'
import "./flight.css"

export default function Flight(props) {
    return (
        <ul className="flight__container">
          <li className={`flight__img ${props.img}`}></li>  
          <li className="flight__number">{props.num}</li>  
          <li className="flight__etaDate">{props.etaDate}</li>  
          <li className="flight__etaTime">{props.etaTime}</li>  
          <li  onClick={()=>{props.onClick(props.value)}} className="flight__picked-up"><i className="fas fa-shuttle-van"></i></li>  
        </ul>
    )
}
