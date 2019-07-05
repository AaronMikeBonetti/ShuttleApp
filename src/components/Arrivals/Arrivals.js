
import React, { Component } from 'react'
import "./arrivals.css"
import Flight from "./Flight/Flight"
import Axios from 'axios';



export default class Arrivals extends Component {
    
    constructor(){
        super()
        this.state = {
            airlineSelectOption:'Choose Airline',
            flightNumberSearch:"",
            client_options:{
                user:'aaronmikebonetti',
                password:'b230674dc8c125241213c6b64d9e135859c94044'
            },
            
             savedFlights: [222,111,3340
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
            flightNumber:222,
            operationalTimes: [],
            schedule: {flightType: "J", serviceClasses: "RJY", restrictions: "", uplines: Array(1)},
            status: "L",}},
            {airportResources: {departureGate: "C1", arrivalTerminal: "A", arrivalGate: "16",
            flightNumber:111, baggage: "9"},
            arrivalAirportFsCode: "MCO",
            arrivalDate: {dateLocal: "2019-06-23T10:51:00.000", dateUtc: "2019-06-23T19:51:00.000Z"},
            carrierFsCode: "AA",
            delays: {departureGateDelayMinutes: 9},
            flightNumber:222,
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
    this.includedFlights = (flight) =>{
        let valueForTrue = false
        let valueForFalse = true
         this.state.savedFlights.forEach(savedFlight=>{
            
            if(flight===savedFlight){
            
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
        let crew = {
            airline:e.carrierFsCode,
            flightNumber:e.flightNumber,
            arrivalDate:e.arrivalDate.dateLocal
        }
        
        Axios.post('http://localhost:5000/received/add', crew)
            .then(res=>console.log(res.data))

        this.setState(prevState=>({
            flightsData: prevState.flightsData.filter(flight=>{
               return flight.flightNumber !== e.flightNumber &&  flight.carrierFsCode !== e.carrierFsCode
        })
        }))
        
    } 
    // this.fetchFlights = () =>{

    //         Axios.get('http://localhost:5000/arrivals/')
    //         .then(response=>{
    //             if(response.data.length > 0){
    //                 this.setState({
    //                     flightsData: response.data
    //                 })
    //             }
    //         })
    // } 
   

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

handleChange= (e) =>{
    const {name,value}= e.target
    console.log(name,value)
    this.setState({        
        [name]: value 
    })
    
}



componentWillMount(){
// this.getAirlineFlightSchedules('KMCO',this.configCurrentTimeInput(),'F9')
// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','AA')
// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','UA')
// this.getAirlineFlightSchedules('KMCO','2019/6/23/17','AS')

this.configArrivalTime()
this.sortFlightsByArrivalTime(this.state.flightsData)
 
    }



       
    render(){
        // console.log(this.state)
        const flights = this.state.flightsData.map(flight=>{
            if(this.includedFlights(flight.flightNumber) === false
            ){
                return null
            }

            else if(this.includedAirlines(flight.carrierFsCode)===false){
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
                    <select name='airlineSelectOption' value={this.state.airlineSelectOption} onChange={this.handleChange}>
                        <option value="" >Select Airline</option>
                        <option value="AS" >Alaska</option>
                        <option value="AA" >
                            American
                        </option>
                        <option value="F9" >Frontier</option>
                        <option value="UA" >United</option>
                    </select>
                    <input name="flightNumberSearch" onChange={this.handleChange} value={this.state.flightNumberSearch}className="flight__number__input"></input>
                    <button onSubmit={this.handleSubmit}>Add</button>
                </form> */}
                <ul className="arrivals__header">
                    <li>Airline</li>
                    <li>Flight<br/>Number</li>
                    <li>Date</li>
                    <li>Arrival<br/>Time</li>
                    <li>Confirm<br/>Pick Up</li>
                </ul>
                {flights}
                <footer></footer>
            </div>
        )
    }
}
