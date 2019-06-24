
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Arrivals from "./components/Arrivals/Arrivals"
import { createStore, applyMiddleware } from "redux"


const initialState = {}

const middleware = []

const rootReducer = (store = initialState, action) => {
return initialState
}

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
console.log("store", store);






function App(){
  
    return (
      
      <div className="app__container">
        <Navbar/>
        <Arrivals/>
        
      </div>
      
    )
  }

export default App;

//App.js
    // fetch flight info
    // search bar for flights
    // display in order of eta
    // create list from data
    // cache flights
  
  //::::DropOff.js
    //Display list of outgoing (need hotel api)
    //Display 15s and 45s
    //

  //::::Flight.js::::
    // airline name or logo (color coded)
    // flight number
    // status (color coded) - delayed+eta/canceled/eta/arrived
    //Side to pick up(maybe)
      //::::Methods:::::
      // click to time stamp and add to completed list (need back-end)
      //


