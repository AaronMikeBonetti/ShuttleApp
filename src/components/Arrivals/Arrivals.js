//build function to filter data based on flight num && airline
//add button for flights with fl# input and airline input 


import React, { Component } from 'react'
import "./arrivals.css"
import Flight from "./Flight/Flight"



export default class Arrivals extends Component {
    
    constructor(){
        super()
        this.state = {
            client_options:{
                user:'aaronmikebonetti',
                password:'b230674dc8c125241213c6b64d9e135859c94044'
            },
            
             flightsIDs: [
            ],
            airlines:['F9','AA','UA','AS'],
            flightsData:[

                {airportResources: {departureGate: "C1", arrivalTerminal: "A", arrivalGate: "16", baggage: "9"},
            arrivalAirportFsCode: "MCO",
            arrivalDate: {dateLocal: "2019-06-23T16:51:00.000", dateUtc: "2019-06-23T19:51:00.000Z"},
            carrierFsCode: "F9",
            flightNumber:111,
            delays: {departureGateDelayMinutes: 9},
            departureAirportFsCode: "ALB",
            departureDate: {dateLocal: "2019-06-23T12:35:00.000", dateUtc: "2019-06-23T16:35:00.000Z"},
            flightDurations: {scheduledBlockMinutes: 196, blockMinutes: 172,
            
             scheduledAirMinutes: 174, airMinutes: 153, scheduledTaxiOutMinutes: 25,
            flightEquipment: {scheduledEquipmentIataCode: "320", actualEquipmentIataCode: "32A", tailNumber: "N232FR"},
            flightId: 1004378217,
            flightNumber: 130,
            operationalTimes: [],
            schedule: {flightType: "J", serviceClasses: "RJY", restrictions: "", uplines: Array(1)},
            status: "L",}},
            {airportResources: {departureGate: "C1", arrivalTerminal: "A", arrivalGate: "16",
            flightNumber:111, baggage: "9"},
            arrivalAirportFsCode: "MCO",
            arrivalDate: {dateLocal: "2019-06-23T10:51:00.000", dateUtc: "2019-06-23T19:51:00.000Z"},
            carrierFsCode: "AA",
            delays: {departureGateDelayMinutes: 9},
            flightNumber:1610,
            departureAirportFsCode: "ALB",
            departureDate: {dateLocal: "2019-06-23T12:35:00.000", dateUtc: "2019-06-23T16:35:00.000Z"},
            flightDurations: {scheduledBlockMinutes: 196, blockMinutes: 172, scheduledAirMinutes: 174, airMinutes: 153, scheduledTaxiOutMinutes: 25,
                flightNumber: 160,
            flightEquipment: {scheduledEquipmentIataCode: "320", actualEquipmentIataCode: "32A", tailNumber: "N232FR"},
            flightId: 1004378217,
           
            schedule: {flightType: "J", serviceClasses: "RJY", restrictions: "", uplines: Array(1)},
            status: "L",}},
            {airportResources: {departureGate: "C1", arrivalTerminal: "A", arrivalGate: "16", baggage: "9"},
            arrivalAirportFsCode: "MCO",
            arrivalDate: {dateLocal: "2019-06-23T15:51:00.000", dateUtc: "2019-06-23T19:51:00.000Z"},
            carrierFsCode: "UA",
            flightNumber: 3340,
            delays: {departureGateDelayMinutes: 9},
            departureAirportFsCode: "ALB",
            departureDate: {dateLocal: "2019-06-23T12:35:00.000", dateUtc: "2019-06-23T16:35:00.000Z"},
            flightDurations: {scheduledBlockMinutes: 196, blockMinutes: 172, scheduledAirMinutes: 174, airMinutes: 153, scheduledTaxiOutMinutes: 25,
            flightEquipment: {scheduledEquipmentIataCode: "320", actualEquipmentIataCode: "32A", tailNumber: "N232FR"},
            flightId: 1004378217,
            flightNumber: "630",
            operationalTimes: [],
            schedule: {flightType: "J", serviceClasses: "RJY", restrictions: "", uplines: Array(1)},
            status: "L",}
            }
        ]
    }
    this.configDateDisplayed = (date) =>{
        let year = date.split('').splice(0,4).join('')
        let day = date.split('').splice(6,2).join('')
        let month = date.split('').splice(4,2).join('')
        return `${month}/${day}/${year}`
    }
    this.configTimeDisplayed = (date) =>{
        let hours = date.split('').splice(8,2).join('')
        let minutes = date.split('').splice(10,2).join('')
        return `${hours}:${minutes}`
    }
    this.configCurrentTimeInput = () =>{
        let currentDate = new Date()
        let currentYear = currentDate.getFullYear()
        let currentMonth = currentDate.getMonth() + 1
        let currentDay = currentDate.getDate()
        let finalDate = `${currentYear}/${currentMonth}/${currentDay}/17`
        
        return finalDate
    }
    this.configArrivalTime= () =>{
        let stateObject = [...this.state.flightsData]
        stateObject.map(flight=>{
            return flight.arrivalDate.dateLocal = flight.arrivalDate.dateLocal.replace(/\D/g,'')
        })
        return this.setState({
            flightsData:stateObject
        })

    }

    this.includedAirlines = (airline) =>{
        let valueForTrue = false
        let valueForFalse = true
         this.state.airlines.forEach(airlineInput=>{
            
            if(airline===airlineInput){
            
            valueForTrue = true
            }
            else{ 
                return valueForFalse = true
            }
            
        })
        return valueForTrue && valueForFalse
        
    }
    
    this.sortFlightsByArrivalTime = (flights) =>{

      let sortedFlights =  flights.sort((prevFlight,nextFlight)=>{
         return (prevFlight.arrivalDate.dateLocal - nextFlight.arrivalDate.dateLocal)    
        })
        this.setState({
            flightsData:sortedFlights
        })
    }
    this.confirmPickUp = (e) =>{
        
            
            console.log(e.carrierFsCode)
    }  
}


getAirlineFlightSchedules = (airport,airline)=> {
    //airport example = KMCO
    //date example = 2019/6/23/17
    //airline example = f9 
    fetch(`https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/airport/status/${airport}/arr/${this.configCurrentTimeInput()}?appId=91671c55&appKey=75376fdd738335ffa0f2b61ecac5dd03&utc=true&numHours=6&carrier=${airline}`)
    .then((response) => response.text())
    .then((responseText) => {
        
        let removeCallbackFromResponse = responseText.split('').splice(9,);
        removeCallbackFromResponse.pop()
        let joinedData = removeCallbackFromResponse.join("")
        
        let finalData = JSON.parse(joinedData)
        finalData.flightStatuses.map(flight=>{
            
            return this.setState(prevState=>({
                flightsData:[ ...prevState.flightsData,flight]
            })
        ) 
        })
        this.configArrivalTime()
        this.sortFlightsByArrivalTime(this.state.flightsData)
    })
    .catch((error) => {
        console.error(error);
    });

}



componentWillMount(){
this.getAirlineFlightSchedules('KMCO',this.configCurrentTimeInput(),'F9')

// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','AA')
// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','UA')
// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','AS')

this.configArrivalTime()
 
    }



       
    render(){
        
        const flights = this.state.flightsData.map(flight=>{
            if(this.includedAirlines(flight.carrierFsCode) === false
            ){
                return null
            }
            else{
            return <Flight 
            key={Math.random()} 
            img={flight.carrierFsCode} value={flight}
            num={flight.flightNumber}
            etaDate={this.configDateDisplayed(flight.arrivalDate.dateLocal)}
            etaTime={this.configTimeDisplayed(flight.arrivalDate.dateLocal)}
            onClick={this.confirmPickUp}/>
            }
        })
        
        return (
            <div className="arrivals__container">
                {/* <form>
                    <input className=""></input>
                </form> */}
                <ul className="arrivals__header">
                    <li>Airline</li>
                    <li>Flight<br/>Number</li>
                    <li>Date</li>
                    <li>Arrival<br/>Time</li>
                    <li>Confirm<br/>Pick Up</li>
                </ul>
                {flights}
            </div>
        )
    }
}
