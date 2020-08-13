const mongoose = require('mongoose');

module.exports = treatmentSchemas = mongoose.Schema({


    patientName: {
        type: String,
        required: true,
    },
    patientID: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    chartType: {
        type: String,
        required: true,
    },
    inputTime: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }




});