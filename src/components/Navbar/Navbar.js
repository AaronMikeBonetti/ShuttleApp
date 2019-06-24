import React, {Component} from 'react'
import "./navbar.css"

export default class Navbar extends Component{
    constructor(){
        super()
        this.state ={
            
        } 
    }
    render(){
    return (
        <div className="navbar__container">
                <div className="navbar__img"></div>
                <h1 className="navbar__arrivals__header">Arrivals</h1>
                <div className="navbar__arrivals__corner"></div>
                
                
                <h1 className="navbar__departures__header">Departures</h1>
                
              
        </div>
    )
    }
}
