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
            fxmlUrl:'https://flightxml.flightaware.com/json/FlightXML2/',
             flightsIDs: [//'FFT1102',
            //'FFT1058','FFT1210','FFT1095'
            ],
            airlines:['F9','AA','UA','AS'],
            flightsData:[
                // {airportResources: {departureGate: "C1", arrivalTerminal: "A", arrivalGate: "16", baggage: "9"},
            // arrivalAirportFsCode: "MCO",
            // arrivalDate: {dateLocal: "2019-06-23T15:51:00.000", dateUtc: "2019-06-23T19:51:00.000Z"},
            // carrierFsCode: "F9",
            // delays: {departureGateDelayMinutes: 9},
            // departureAirportFsCode: "ALB",
            // departureDate: {dateLocal: "2019-06-23T12:35:00.000", dateUtc: "2019-06-23T16:35:00.000Z"},
            // flightDurations: {scheduledBlockMinutes: 196, blockMinutes: 172, scheduledAirMinutes: 174, airMinutes: 153, scheduledTaxiOutMinutes: 25,
            // flightEquipment: {scheduledEquipmentIataCode: "320", actualEquipmentIataCode: "32A", tailNumber: "N232FR"},
            // flightId: 1004378217,
            // flightNumber: "130",
            // operationalTimes: [],
            // schedule: {flightType: "J", serviceClasses: "RJY", restrictions: "", uplines: Array(1)},
            // status: "L",}},
            // {airportResources: {departureGate: "C1", arrivalTerminal: "A", arrivalGate: "16", baggage: "9"},
            // arrivalAirportFsCode: "MCO",
            // arrivalDate: {dateLocal: "2019-06-23T15:51:00.000", dateUtc: "2019-06-23T19:51:00.000Z"},
            // carrierFsCode: "F9",
            // delays: {departureGateDelayMinutes: 9},
            // departureAirportFsCode: "ALB",
            // departureDate: {dateLocal: "2019-06-23T12:35:00.000", dateUtc: "2019-06-23T16:35:00.000Z"},
            // flightDurations: {scheduledBlockMinutes: 196, blockMinutes: 172, scheduledAirMinutes: 174, airMinutes: 153, scheduledTaxiOutMinutes: 25,
            // flightEquipment: {scheduledEquipmentIataCode: "320", actualEquipmentIataCode: "32A", tailNumber: "N232FR"},
            // flightId: 1004378217,
            // flightNumber: "130",
            // operationalTimes: [],
            // schedule: {flightType: "J", serviceClasses: "RJY", restrictions: "", uplines: Array(1)},
            // status: "L",}},
            // {airportResources: {departureGate: "C1", arrivalTerminal: "A", arrivalGate: "16", baggage: "9"},
            // arrivalAirportFsCode: "MCO",
            // arrivalDate: {dateLocal: "2019-06-23T15:51:00.000", dateUtc: "2019-06-23T19:51:00.000Z"},
            // carrierFsCode: "F9",
            // delays: {departureGateDelayMinutes: 9},
            // departureAirportFsCode: "ALB",
            // departureDate: {dateLocal: "2019-06-23T12:35:00.000", dateUtc: "2019-06-23T16:35:00.000Z"},
            // flightDurations: {scheduledBlockMinutes: 196, blockMinutes: 172, scheduledAirMinutes: 174, airMinutes: 153, scheduledTaxiOutMinutes: 25,
            // flightEquipment: {scheduledEquipmentIataCode: "320", actualEquipmentIataCode: "32A", tailNumber: "N232FR"},
            // flightId: 1004378217,
            // flightNumber: "130",
            // operationalTimes: [],
            // schedule: {flightType: "J", serviceClasses: "RJY", restrictions: "", uplines: Array(1)},
            // status: "L",}
            // }
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
    
}


getAirlineFlightSchedules = (airport,date,airline)=> {
    //airport example = KMCO
    //date example = 2019/6/23/17
    //airline example = f9 
    fetch(`https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/airport/status/${airport}/arr/${date}?appId=91671c55&appKey=75376fdd738335ffa0f2b61ecac5dd03&utc=true&numHours=6&carrier=${airline}`)
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
  
  
  
  
    // return this.setState(prevState=>({
    //         flightsData:[ ...prevState.flightsData,flight]
    //     })
    // )   
}



componentWillMount(){
// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','F9')
// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','AA')
// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','UA')
this.getAirlineFlightSchedules('KMCO','2019/6/23/17','AS')

this.configArrivalTime()
 
    }



       
    render(){
        
        console.log(this.state)
        const flights = this.state.flightsData.map(flight=>{
            
            if(this.includedAirlines(flight.carrierFsCode) === false
            ){
                return null
            }
            else{
            return <Flight 
            key={Math.random()} 
            img={flight.carrierFsCode} 
            num={flight.flightNumber}
            etaDate={this.configDateDisplayed(flight.arrivalDate.dateLocal)}
            etaTime={this.configTimeDisplayed(flight.arrivalDate.dateLocal)}
            received={flight.received} receivedTime={flight.receivedTime}/>
            }
        })
        
        return (
            <div className="arrivals__container">
                {flights}
            </div>
        )
    }
}
