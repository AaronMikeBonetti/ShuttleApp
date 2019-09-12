
import React, { Component } from 'react'
import "./departures.css"
import Crew from "./Crew"

export default class Departures extends Component {
    constructor(){
        super()
        this.state = {
            flightCrews:[
                {
                airline:"AA",
                crewDepartureTime:"4:00",
                crewAmount:"3",
                isQuarterHour:false
            },
                {
                airline:"UA",
                crewDepartureTime:"4:45",
                crewAmount:"3",
                isQuarterHour:true
                
            },
                {
                airline:"AA",
                crewDepartureTime:"4:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"AS",
                crewDepartureTime:"5:00",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"F9",
                crewDepartureTime:"5:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"UA",
                crewDepartureTime:"6:15",
                crewAmount:"2",
                isQuarterHour:true
            },
                {
                airline:"AA",
                crewDepartureTime:"6:30",
                crewAmount:"2",
                isQuarterHour:false
            },
            
                {
                airline:"F9",
                crewDepartureTime:"6:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"AA",
                crewDepartureTime:"7:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"F9",
                crewDepartureTime:"8:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"AA",
                crewDepartureTime:"8:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"UA",
                crewDepartureTime:"9:00",
                crewAmount:"4",
                isQuarterHour:false
            },
                {
                airline:"UA",
                crewDepartureTime:"9:15",
                crewAmount:"2",
                isQuarterHour:true
            },
                {
                airline:"AA",
                crewDepartureTime:"9:15",
                crewAmount:"2",
                isQuarterHour:true
            },
                {
                airline:"F9",
                crewDepartureTime:"10:00",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"AA",
                crewDepartureTime:"11:00",
                crewAmount:"2",
            },
                {
                airline:"AA",
                crewDepartureTime:"11:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"F9",
                crewDepartureTime:"11:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"UA",
                crewDepartureTime:"12:30",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"AA",
                crewDepartureTime:"17:00",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"UA",
                crewDepartureTime:"19:00",
                crewAmount:"2",
                isQuarterHour:false
            },
                {
                airline:"F9",
                crewDepartureTime:"22:00",
                crewAmount:"2",
                isQuarterHour:false
            },
            
        ]
        }
    }
    render() {
        let crews = this.state.flightCrews.map(crew=>{
            return <Crew isQuarterHour={crew.isQuarterHour}
            key={Math.random()} airline={crew.airline} crewDepartureTime={crew.crewDepartureTime} crewAmount={crew.crewAmount}/>
        })
        return (
            <div className="departures__container">
                
                <ul className="departures__header">
                    <li>Airline</li>
                    <li>Time</li>
                    <li>Crew Amount</li>
                </ul>
                {crews}
                <footer></footer>
            </div>
        )
    }
}
