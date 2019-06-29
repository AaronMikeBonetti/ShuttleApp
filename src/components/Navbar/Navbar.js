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
            <div className="navbar__img"></div>
           
            
            <div className="navbar__arrivals__background"></div>
            <div className="navbar__departures__background"></div>
            <div className="navbar__picked-up__background"></div>
            
    
                <div className="navbar__arrivals__container">
                    <Link to="/arrivals">
                Arrivals</Link>
                <div className="navbar__arrivals__corner"></div>
                
                </div>
                
                <div className="navbar__departures__container">
                    <Link to="/departures">
                Departures</Link>
                <div className="navbar__departure__corner"></div>
                </div>
                
                <div className="navbar__picked-up__container">
                    <Link to="/pickedup">
                Picked-Up</Link>
                <div className="navbar__picked-up__corner"></div>
                </div>
                
                <div className="navbar__valet__container">
                    <Link to="/valet">
                Valet</Link>
                <div className="navbar__valet__corner"></div>
                </div>
                
                
                
               
                
                {/* <Link to="/departures"> <h1 className="navbar__departures__header">Departures</h1></Link>
                
                <div className="navbar__departures__corner"></div>
                
                <Link to="/pick-up"><h1 className="navbar__picked-up__header">Picked-Up</h1></Link>
                <div className="navbar__picked-up__corner"></div>
                <Link to="/valet"><h1 className="navbar__valet__header">Valet</h1></Link> */}
                
              
        </div>
    )
    }
}
