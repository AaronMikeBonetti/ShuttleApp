
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Arrivals from "./components/Arrivals/Arrivals"
import { createStore, applyMiddleware } from "redux"
import Departures from './components/Departures/Departures';
import Received from './components/Received/Received';


const initialState = {}

const middleware = []

const rootReducer = (store = initialState, action) => {
return initialState
}

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
console.log("store", store);






function App(){
  
    return (
      <BrowserRouter>
      <div className="app__container">
        <Navbar/>
        <Route onEnter={window.scroll(0,0)} path="/arrivals" component={Arrivals}/>
        <Route path="/departures" component={Departures}/>
        <Route path="/received" component={Received}/>
        
        
      </div>
      </BrowserRouter>
      
    )
  }

export default App;


