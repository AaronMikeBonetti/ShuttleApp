// const router = require('express').Router()
// let arrivals = require('../Models/arrivals.model')
// let fetch = require("node-fetch")
// let Axios = require('axios')

// router.route('/').get((req,res)=>{
//     const baseUrl = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/'
//     const appId = '91671c55'
//     const appKey = '75376fdd738335ffa0f2b61ecac5dd03&utc'
    
//     fetch(`https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/airport/status/KMCO/arr/2019/6/23/17?${appId}&${appKey}=true&numHours=6&carrier=f9`)
//     .then((response) => response.json())
//     .then((data) => {
//         Axios.post('/',{data})
//             .then(response=>{
//                 console.log(response)
//             })
//             .catch(err=>{
//                 console.log(err)
//             })
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

// router.route('/add').post((req,res)=>{
//     const airline = req.body.airline
//     const flightNumber = req.body.flightNumber
//     const arrivalDate = req.body.arrivalDate
    
//     const newCrew = new arrivals({
//         airline,
//         flightNumber,
//         arrivalDate,    
//     })

//     newCrew.save()
//         .then(()=> res.json('Crew Added!'))
//         .catch(err => res.status(400).json('Error' + err))
//     })

// module.exports = router
