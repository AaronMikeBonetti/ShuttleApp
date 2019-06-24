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
            airlines:['FFT','AAL'],
            flightsData:[
            {actual_ident: "",
            img:"FFT",
            aircrafttype: "A320",
            arrivaltime: 1561307820,
            departuretime: 1561300140,
            destination: "KMCO",
            ident: "FFT1053",
            meal_service: "Economy: Food for sale",
            origin: "KCVG",
            seats_cabin_business: 0,
            seats_cabin_coach: 186,
            seats_cabin_first: 0},
            {actual_ident: "",
            img:"ASA",
            aircrafttype: "A320",
            arrivaltime: 15613058550,
            departuretime: 1561300140,
            destination: "KMCO",
            ident: "FFT1063",
            meal_service: "Economy: Food for sale",
            origin: "KCVG",
            seats_cabin_business: 0,
            seats_cabin_coach: 186,
            seats_cabin_first: 0},
            {actual_ident: "",img:"AAL",
            aircrafttype: "A320",
            arrivaltime: 1561307820,
            departuretime: 1561300140,
            destination: "KMCO",
            ident: "FFT1563",
            meal_service: "Economy: Food for sale",
            origin: "KCVG",
            seats_cabin_business: 0,
            seats_cabin_coach: 186,
            seats_cabin_first: 0},
            {actual_ident: "",
            img:"UAL",
            aircrafttype: "A320",
            arrivaltime: 1561389820,
            departuretime: 1561300140,
            destination: "KMCO",
            ident: "FFT1083",
            meal_service: "Economy: Food for sale",
            origin: "KCVG",
            seats_cabin_business: 0,
            seats_cabin_coach: 186,
            seats_cabin_first: 0}
        ]
    }
    this.convertUNIX = (UNIX) =>{
        let date = new Date(UNIX*1000)
        let hour = `${date.getHours()}:${date.getMinutes()}` 
        return hour.toString()
    }
    
    this.sortFlightsByArrivalTime = (flights) => {
      let sortedFlights =  flights.sort((prevFlight,nextFlight)=>{
          return prevFlight.arrivaltime - nextFlight.arrivaltime   
        })
        return sortedFlights    
    }

    this.spliceDisplayedFlightNumber = (flightNum)=>{
        return flightNum.split('').splice(3,4)  
    }
}


getAirlineFlightSchedules = (airport,date,airline)=> {
    //airport example = KMCO
    //date example = 2019/6/23/17
    //airline example = f9 
    fetch('https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/2019/6/23/17?appId=91671c55&appKey=75376fdd738335ffa0f2b61ecac5dd03&utc=true&numHours=6&carrier=F9'
    )
    
  .then(response=> {
      return response.json()
  })
  .then(data=>{
      console.log("data:",data)
  })
  
  
    // return this.setState(prevState=>({
    //         flightsData:[ ...prevState.flightsData,flight]
    //     })
    // )   
}



componentWillMount(){
this.getAirlineFlightSchedules('KMCO','2019/6/23/17','F9')

 
    }
componentDidUpdate(){
    this.sortFlightsByArrivalTime(this.state.flightsData)
}


       
    render(){
        // console.log(this.state)
        const flights = this.state.flightsData.map(flight=>{
            return <Flight key={flight.ident} img={flight.img} num={this.spliceDisplayedFlightNumber(flight.ident)}
            eta={this.convertUNIX(flight.arrivaltime)}
             received={flight.received} receivedTime={flight.receivedTime}/>
        })
        
        return (
            <div className="arrivals__container">
                {flights}
            </div>
        )
    }
}
// getFlightInfo = (flights) =>{

//     let client = new Client(this.state.client_options);
//     flights.map(flight=>{
//     client.registerMethod('flightInfo', this.state.fxmlUrl + 'FlightInfo', 'GET');
//     let flightInfoArgs = {
//     parameters: {
//         ident:flight,
//         howMany:2
//         }
//     };
//     return client.methods.flightInfo(flightInfoArgs
//         ,(data, response)=>{
//           this.setState(prevState=>({
//                 flightsData:[...prevState.flightsData,data.FlightInfoResult.flights[0]]
//                 })
//             )}
//     )
// })

// }