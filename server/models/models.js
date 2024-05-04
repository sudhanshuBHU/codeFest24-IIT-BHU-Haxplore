const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    gender:{
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    },
    mobile:{
        required: true,
        type: Number,
    },
    email:{
        type: String
    },
    idname: {
        required: true,
        type: String
    },
    idnum: {
        required: true,
        type: String,
        unique: true
    },
    no_of_person:{
        required: true,
        type: Number
    },
    status:{
        required: true,
        type: Boolean
    }    
});

module.exports = mongoose.model('Data', userSchema)