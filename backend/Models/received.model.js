const mongoose = require('mongoose')
const Schema = mongoose.Schema

const receivedSchema = new Schema({
    airline:{type:String,require:true,},
    flightNumber:{type:Number,require:true},
    arrivalDate:{type:String,require:true},
    date: {type:Date,require:true}
}, {
    timestamps: true,
})

const Received = mongoose.model('Received', receivedSchema)

module.exports = Received