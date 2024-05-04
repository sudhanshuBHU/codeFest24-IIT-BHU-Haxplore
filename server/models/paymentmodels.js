const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userid:{
        required: true,
        type: String,
        unique: true
    },
    razorid:{
        required: true,
        type: String,
        unique: true
    },
    amount:{
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('paymentdata', paymentSchema)