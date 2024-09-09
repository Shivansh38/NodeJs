const mongoose = require('mongoose');

// Define the Person schema

const personSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    Work:{
        type:String,
        enum:['chef','waiter','engineer']
    }
})
// create person model

const Person = mongoose.model('Person',personSchema);
module.exports = Person;