import React, { Component } from 'react'
import "./valet.css"

export default class Valet extends Component {
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            ticketNumber:""
        }
        this.handleChange = (e) => {
           let  {name,value} = e.target
           this.setState({
               [name]: value
           })
        }    
    }
    render() {
        return (
            <div className="valet__container">
                <form className="valet__form">
                    
                    <input onChange={this.handleChange} className="valet__first-name__input" name="firstName" value={this.state.firstName} placeholder="First Name"></input>
                    <input className="valet__last-name__input" onChange={this.handleChange}  name="lastName" value={this.state.lastName} placeholder="Last Name"></input>
                    <input className="valet__ticket__input" onChange={this.handleChange}  name="ticketNumber" value={this.state.ticketNumber} placeholder="Ticket Number"></input>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                
            </div>
        )
    }
}
