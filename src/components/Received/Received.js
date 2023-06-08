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
        // this.deleteCrews = () =>{
        //     axios.get('https://shuttleappbackend.herokuapp.com/received/delete')
        // .then(response=>{
        //     console.log('done')
        //     }
        // )
        // }
    }

    componentDidMount(){
        // axios.get('https://shuttleappbackend.herokuapp.com/received')
        //     .then(response=>{
        //         if(response.data.length > 0){
                    
        //             this.setState({
        //                 receivedList: response.data
        //             })
        //         }
        //     })
        
        

            this.configArrivalTimeDisplayed = (date) =>{
                let hours = date.split('').splice(8,2).join('')
                let minutes = date.split('').splice(10,2).join('')
                return `${hours}:${minutes}`
            }
            this.configReceivedTimeDisplayed = (date) =>{
                let localDate = new Date(date)
                let dateArray = localDate.toString()
                let hours = dateArray.split('').splice(16,2).join('')
                let minutes = dateArray.split('').splice(18,3).join('')
                return `${hours}${minutes}`
            }
            
        
            
    }
    render() {
        
        // let crews = this.state.receivedList.map(crew=>{
        //     return <ReceivedCrew
        //     key={Math.random()} airline={crew.airline} flightNumber={crew.flightNumber}
        //     arrivalTime={this.configArrivalTimeDisplayed(crew.arrivalDate)}
        //     receivedDate={this.configReceivedTimeDisplayed(crew.createdAt)}
        //     />
        // })
        
        return (
            <div className="received__container">
               
                <ul className="received__header">
                    <li>Airline<br/></li>
                    <li>Flight<br/>Number</li>
                    <li>Arrival<br/>Time</li>
                    <li>Received<br/>Time</li>
                </ul>  
                {/* {crews} */}
                {/* <button onClick={this.deleteCrews()}>Delete Crews</button> */}
                <footer></footer>
            </div>
        )
    }
}
