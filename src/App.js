
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Arrivals from "./components/Arrivals/Arrivals"
import Departures from './components/Departures/Departures';
import Received from './components/Received/Received';
import Valet from './components/Valet/Valet';

function App(){
  
    return (
      <BrowserRouter>
      <div className="app__container">
        <Navbar/>
        <Route onEnter={window.scroll(0,0)} exact path="/" component={Arrivals}/>
        <Route path="/departures" component={Departures}/>
        <Route path="/received" component={Received}/>
        <Route path="/valet" component={Valet}/> 
      </div>
      </BrowserRouter>
      
    )
  }

export default App;


