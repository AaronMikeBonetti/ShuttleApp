import React, {Component} from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

export default class Navbar extends Component{
    constructor(){
        super()
        this.state ={
            arrivalsCorner:"navbar__arrivals__right__corner",
            arrivalsBackground:"navbar__arrivals__background__light",
            departuresBackground:"navbar__departures__background__dark",
            departuresCorner:"navbar__departures__right__corner",
            receivedBackground:"navbar__received__background__light",
            receivedCorner:"navbar__received__right__corner" 
        }
        
        this.changeTab = (tab) =>{
            switch(tab){
                case 'Arrivals':
                        this.setState({
                            arrivalsCorner:"navbar__arrivals__right__corner",
                            arrivalsBackground:"navbar__arrivals__background__light",
                            departuresBackground:"navbar__departures__background__dark",
                            departuresCorner:"navbar__departures__right__corner",
                            receivedBackground:"navbar__received__background__light",
                            receivedCorner:"navbar__received__right__corner"
                        })
                        break 
                case 'Departures':
                        this.setState({
                            arrivalsCorner:"navbar__arrivals__left__corner",
                            departuresCorner:"navbar__departures__right__corner",
                            arrivalsBackground:"navbar__arrivals__background__dark",
                            departuresBackground:"navbar__departures__background__dark",
                            receivedBackground:"navbar__received__background__light",
                            receivedCorner:"navbar__received__right__corner"
                        })
                        break 
                case 'Received':
                        this.setState({
                            arrivalsCorner:"navbar__arrivals__left__corner",
                            departuresCorner:"navbar__departures__left__corner",
                            arrivalsBackground:"navbar__arrivals__background__dark",
                            departuresBackground:"navbar__departures__background__light",
                            receivedBackground:"navbar__received__background__light",
                            receivedCorner:"navbar__received__right__corner"
                        })
                        break 
                case 'Valet':
                        this.setState({
                            arrivalsCorner:"navbar__arrivals__left__corner",
                            departuresCorner:"navbar__departures__left__corner",
                            arrivalsBackground:"navbar__arrivals__background__dark",
                            departuresBackground:"navbar__departures__background__light",
                            receivedBackground:"navbar__received__background__dark",
                            receivedCorner:"navbar__received__left__corner",
                        })
                        break 
                default:
                    break 
            }
            
            
        }
    }

   
    
    render(){
    return (
        <div className="navbar__container">
            <div className="navbar__img"></div>
           
            <div className={this.state.arrivalsBackground}></div>
            <div className={this.state.departuresBackground}></div>
            <div className={this.state.receivedBackground}></div>
            
    
                <div  className="navbar__arrivals__container">
                    <Link onClick={()=>{this.changeTab("Arrivals")}} to="/arrivals">
                Arrivals</Link>
                <div className={this.state.arrivalsCorner}></div>
                
                </div>
                
                <div className="navbar__departures__container">
                    <Link onClick={()=>{this.changeTab("Departures")}} to="/departures">
                Departures</Link>
                <div className={this.state.departuresCorner}></div>
                </div>
                
                <div className="navbar__received__container">
                    <Link onClick={()=>{this.changeTab("Received")}} to="/received">
                Received</Link>
                <div className={this.state.receivedCorner}></div>
                </div>
                
                <div className="navbar__valet__container">
                    <Link onClick={()=>{this.changeTab("Valet")}}to="/valet">
                Valet</Link>
                <div></div>
                </div>
                
                
                
               
                
                {/* <Link to="/departures"> <h1 className="navbar__departures__header">Departures</h1></Link>
                
                <div className="navbar__departures__corner"></div>
                
                <Link to="/pick-up"><h1 className="navbar__received__header">received</h1></Link>
                <div className="navbar__received__corner"></div>
                <Link to="/valet"><h1 className="navbar__valet__header">Valet</h1></Link> */}
                
              
        </div>
    )
    }
}
