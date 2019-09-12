import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.addEventListener('load', ()=>{
  registerSW()
})

async function registerSW(){
  if("serviceWorker" in navigator){
    try{
      await navigator.serviceWorker.register("./serviceWorker")
      console.log("service worker registered")
    }
    catch(e){
      console.log("service worker failed", e)
    }
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
