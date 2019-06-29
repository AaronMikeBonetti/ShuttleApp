import React, {Component} from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

export default class Navbar extends Component{
    constructor(){
        super()
        this.state ={
            
        } 
    }
    render(){
    return (
        <div className="navbar__container">

            <div className="arrivals__background"></div>
            <div className="departures__background"></div>
            
            
           
                <div className="navbar__img"></div>
                <Link to="/arrivals"><h1 className="navbar__arrivals__header">Arrivals</h1><div className="navbar__arrivals__container"></div>
                </Link>
                
                <div className="navbar__arrivals__corner"></div>
                
                <Link to="/departures"> <h1 className="navbar__departures__header">Departures</h1></Link>
                
                <div className="navbar__departures__corner"></div>
                <Link to="/pick-up"><h1 className="navbar__picked-up__header">Picked-Up</h1></Link>
                <div className="navbar__picked-up__corner"></div>
                <Link to="/valet"><h1 className="navbar__valet__header">Valet</h1></Link>
                
              
        </div>
    )
    }
}
