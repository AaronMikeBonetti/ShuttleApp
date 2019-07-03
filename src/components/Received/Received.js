import React, { Component } from 'react'
import "./received.css"
import axios from "axios"
import ReceivedCrew from "../Received/ReceivedCrew"

export default class Received extends Component {
    constructor(){
        super()
        this.state={
            receivedList:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/received/')
            .then(response=>{
                if(response.data.length > 0){
                    
                    this.setState({
                        receivedList: response.data
                    })
                }
            })
            this.configArrivalTimeDisplayed = (date) =>{
                let hours = date.split('').splice(8,2).join('')
                let minutes = date.split('').splice(10,2).join('')
                return `${hours}:${minutes}`
            }
            this.configReceivedTimeDisplayed = (date) =>{
                let hours = date.split('').splice(11,2).join('')
                let minutes = date.split('').splice(13,3).join('')
                return `${hours}${minutes}`
            }
            
    }
    render() {
        let crews = this.state.receivedList.map(crew=>{
            return <ReceivedCrew
            key={Math.random()} airline={crew.airline} flightNumber={crew.flightNumber}
            arrivalTime={this.configArrivalTimeDisplayed(crew.arrivalDate)}
            receivedDate={this.configReceivedTimeDisplayed(crew.createdAt)}
            />
        })
        
        return (
            <div className="received__container">
                <div className="received__sidebar"></div>
                <ul className="received__header">
                    <li>Airline</li>
                    <li>Flight Number</li>
                    <li>Arrival Time</li>
                    <li>Received Time</li>
                </ul>  
                {crews}
            </div>
        )
    }
}
