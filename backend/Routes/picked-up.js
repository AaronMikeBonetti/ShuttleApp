const router = require('express').Router()
let PickedUp = require('../Models/picked-up.model')

router.route('/').get((req,res)=>{
    PickedUp.find()
        .then(crews => res.json(crews))
        .catch(err=> res.status(400).json('Error:' + err))
})

router.route('/add').post((req,res)=>{
    const airline = req.body.airline
    const flightNumber = req.body.flightNumber
    const arrivalTime = Number(req.body.arrivalTime)
    const date = Date.parse(req.body.date)

    const newCrew = new PickedUp({
        airline,
        flightNumber,
        arrivalTime,
        date
    })

    newCrew.save()
        .then(()=> res.json('Crew Added!'))
        .catch(err => res.status(400).json('Error' + err))
})

module.exports = router
