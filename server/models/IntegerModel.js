const mongoose = require('mongoose');

const IntegerSchema = new mongoose.Schema({
    idnumber:{
        required: true,
        type: Number
    },
    one:{
        required: true,
        type: Number
    },
    two:{
        required: true,
        type: Number
    },
    three:{
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("IntegerData", IntegerSchema);