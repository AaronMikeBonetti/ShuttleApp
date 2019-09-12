
import React, { Component } from 'react'
import "./arrivals.css"
import Flight from "./Flight/Flight"
import Axios from 'axios';



export default class Arrivals extends Component {
    
    constructor(){
        super()
        this.state = {
            flightNumberSearch:"",
            client_options:{
                user:'aaronmikebonetti',
                password:'b230674dc8c125241213c6b64d9e135859c94044'
            },
            
             
            airlines:['F9','AA','UA','AS'],
            isPopUpActive:false,
            queuedCrew:{flightNumber:''},
            flightsData:[
                {
            arrivalDate: {dateLocal: "2019-06-23T00:51:00.000"},
            carrierFsCode: "UA",
            flightNumber:1214,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T01:21:00.000"},
            carrierFsCode: "F9",
            flightNumber:880,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T06:21:00.000"},
            carrierFsCode: "UA",
            flightNumber:403,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T06:17:00.000"},
            carrierFsCode: "F9",
            flightNumber:201,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T07:06:00.000"},
            carrierFsCode: "F9",
            flightNumber:310,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T10:50:00.000"},
            carrierFsCode: "F9",
            flightNumber:141,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T12:24:00.000"},
            carrierFsCode: "AS",
            flightNumber:20,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T13:40:00.000"},
            carrierFsCode: "F9",
            flightNumber:4441,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T14:31:00.000"},
            carrierFsCode: "F9",
            flightNumber:7841,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T14:34:00.000"},
            carrierFsCode: "F9",
            flightNumber:431,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T17:16:00.000"},
            carrierFsCode: "AS",
            flightNumber:3641,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T16:21:00.000"},
            carrierFsCode: "F9",
            flightNumber:906,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T16:51:00.000"},
            carrierFsCode: "F9",
            flightNumber:208,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T20:35:00.000"},
            carrierFsCode: "F9",
            flightNumber:2236,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T23:40:00.000"},
            carrierFsCode: "F9",
            flightNumber:546,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T00:03:00.000"},
            carrierFsCode: "AS",
            flightNumber:10,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T01:41:00.000"},
            carrierFsCode: "",
            flightNumber:2031,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T04:21:00.000"},
            carrierFsCode: "AS",
            flightNumber:20,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T06:00:00.000"},
            carrierFsCode: "AA",
            flightNumber:1231,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T07:06:00.000"},
            carrierFsCode: "AA",
            flightNumber:2031,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T05:55:00.000"},
            carrierFsCode: "F9",
            flightNumber:141,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T07:07:00.000"},
            carrierFsCode: "AA",
            flightNumber:1121,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T07:20:00.000"},
            carrierFsCode: "AA",
            flightNumber:4441,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T08:38:00.000"},
            carrierFsCode: "AA",
            flightNumber:7841,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T14:34:00.000"},
            carrierFsCode: "AA",
            flightNumber:3441,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T07:16:00.000"},
            carrierFsCode: "AA",
            flightNumber:3641,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T12:26:00.000"},
            carrierFsCode: "UA",
            flightNumber:906,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T14:35:00.000"},
            carrierFsCode: "UA",
            flightNumber:346,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T22:25:00.000"},
            carrierFsCode: "UA",
            flightNumber:2236,
            },
                {
            arrivalDate: {dateLocal: "2019-06-23T22:40:00.000"},
            carrierFsCode: "UA",
            flightNumber:856,
            },
            
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
        let finalDate = `${currentMonth}/${currentDay}/${currentYear}`
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
    // this.includedFlights = (flight) =>{
    //     let valueForTrue = false
    //     let valueForFalse = true
    //      this.state.savedFlights.forEach(savedFlight=>{
            
    //         if(flight===savedFlight){
            
    //         valueForTrue = true
    //         }
    //         else{ 
    //             return valueForFalse = true
    //         }
            
    //     })
    //     return valueForTrue && valueForFalse
        
    // }
    
    this.sortFlightsByArrivalTime = (flights) =>{

      let sortedFlights =  flights.sort((prevFlight,nextFlight)=>{
         return (prevFlight.arrivalDate.dateLocal - nextFlight.arrivalDate.dateLocal)    
        })
        this.setState({
            flightsData:sortedFlights
        })
    }
    this.confirmPickUp = (e) =>{
        this.setState({
            isPopUpActive:true,
            queuedCrew:{
                airline:e.carrierFsCode,
                flightNumber:e.flightNumber,
                arrivalDate:e.arrivalDate.dateLocal
            }
        })
    }
    this.handleCancel= (e) =>{
        this.setState({
            isPopUpActive:false,
        })
    }
    this.sendPickUpToReceived = () =>{
        let crew = this.state.queuedCrew
        
        Axios.post('https://shuttleappbackend.herokuapp.com/received/add', crew)
            .then(res=>console.log(res.data))

        this.setState(prevState=>({
            isPopUpActive:false,
            queuedCrew:"",
            flightsData: prevState.flightsData.filter(flight=>{
               return flight.flightNumber !== crew.flightNumber &&  flight.carrierFsCode !== crew.carrierFsCode
        })
        }))
        
    } 
    
    }


getAirlineFlightSchedules = (airport,airline)=> {
    //airport example = KMCO
    //date example = 2019/6/23/17
    //airline example = f9 
    // fetch(`https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/airport/status/KMCO/arr/2019/6/23/17?appId=91671c55&appKey=75376fdd738335ffa0f2b61ecac5dd03&utc=true&numHours=6&carrier=f9`)
    // .then((response) => response.text())
    // .then((responseText) => {
        
    //     let removeCallbackFromResponse = responseText.split('').splice(9,);
    //     removeCallbackFromResponse.pop()
    //     let joinedData = removeCallbackFromResponse.join("")
        
    //     let finalData = JSON.parse(joinedData)
    //     finalData.flightStatuses.map(flight=>{
            
    //         return this.setState(prevState=>({
    //             flightsData:[ ...prevState.flightsData,flight]
    //         })
    //     ) 
    //     })
        
    //     this.configArrivalTime()
    //     this.sortFlightsByArrivalTime(this.state.flightsData)
    // })
    // .catch((error) => {
    //     console.error(error);
    // });
    

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
// this.fetchFlights()
this.configArrivalTime()
this.sortFlightsByArrivalTime(this.state.flightsData)

    }



       
    render(){
        console.log(this.state)
        const flights = this.state.flightsData.map(flight=>{
            // if(this.includedFlights(flight.flightNumber) === false
            // ){
            //     return null
            // }

            if(this.includedAirlines(flight.carrierFsCode)===false){
                return null
            }
            else{
            return <Flight 
            key={Math.random()} 
            img={flight.carrierFsCode} value={flight}
            num={flight.flightNumber}
            etaDate={this.configCurrentTimeInput()}
            etaTime={this.configTimeDisplayed(flight.arrivalDate.dateLocal)}
            onClick={this.confirmPickUp}/>
            }
        })
        
        return (
            <div className="arrivals__container">
                <div onClick={this.handleCancel} className={this.state.isPopUpActive?"arrivals__pop-up__container__active":"arrivals__pop-up__container__disabled"}>
                    <div className="arrivals__pop-up">
                        <h1>Confirm Pick-Up</h1>
                        <h2>{this.state.queuedCrew.flightNumber}</h2>
                        <button onClick={this.sendPickUpToReceived}>Submit</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
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
