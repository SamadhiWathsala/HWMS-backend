const mongoose = require('mongoose');

module.exports = testSchemas = mongoose.Schema({

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
    testCategory: {
        type: String,
        required: true,
    },
    testName: {
        type: String,
        required: true,

    },
    testDescription: {
        type: String,
        required: true,
    },
    testStatus: {
        type: String,
        required: true,
    },



});