const mongoose = require('mongoose');

module.exports = treatmentSchemas = mongoose.Schema({

    bht: {
        type: String,
        required: true,

    },
    patientName: {
        type: String,
        required: true,

    },
    /*
    requestedDate: {
        type: Date(),
        required: true,
    }
    */
    treatmentType: {
        type: String,
        required: true,
    },
    drugDetails: {
        type: String,
        required: true,

    },
    patientID: {
        type: String,
        required: true,
    }
    /*
    treatTime: {
        type: String,
        required: true,
    },
    */



});