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
    treatmentType: {
        type: String,
        required: true,
    },
    drugDetails: {
        type: String,
        required: true,
    },
    treatmentStatus: {
        type: String,
        required: true,
    },
    treatTime: {
        type: String,
        required: true,
    },
    fastingHour: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }




});