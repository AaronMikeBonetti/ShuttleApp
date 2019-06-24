
let express = require("express")
let cors = require("cors")
let app = express()
let fetch = require('node-fetch')

app.use(cors())
app.use(express.static('public'))
function getAirlineFlightSchedules (airport,date,airline){
    //airport example = KMCO
    //date example = 2019/6/23/17
    //airline example = f9 
    fetch('https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/2019/6/23/17?appId=91671c55&appKey=75376fdd738335ffa0f2b61ecac5dd03&utc=true&numHours=6&carrier=F9'
    )
    
  .then(response=> {
      return response.json()
  })
  .then(data=>{
      console.log(data)
  })

} 

app.get('/', function (req, res, next) {    
//     fetch('https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/2019/6/23/17?appId=91671c55&appKey=75376fdd738335ffa0f2b61ecac5dd03&utc=true&numHours=6&carrier=F9'
//     )
//   .then(response=>{
//     return response.json()
//   })
//   .then(data=>{
//       res.json(data)
//   })
    
})

  app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 80')
  })