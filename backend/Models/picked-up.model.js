const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pickedUpSchema = new Schema({
    airline:{type:String,require:true,},
    flightNumber:{type:Number,require:true},
    arrivalTime:{type:String,require:true},
    date: {type:Date,require:true}
}, {
    timestamps: true,

})

const PickedUp = mongoose.model('PickedUp', pickedUpSchema)

module.exports = PickedUp