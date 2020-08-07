const mongoose = require('mongoose');
const Patients = require("../models/Patients");

module.exports = testSchemas = mongoose.Schema({

    patient: {
        type: mongoose.Types.ObjectId,
        ref: Patients,
        required: true
    },
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