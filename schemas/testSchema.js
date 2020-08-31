const mongoose = require('mongoose');
const Users = require("../models/User");
// const Patients = require("../models/Patients");

module.exports = testSchemas = mongoose.Schema({


    patientID: {
        type: String,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
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
    collectionState: {
        type: String,
        required: true,
    },
    fastingHours: {
        type: String,
        required: true,
    },
    // sampleCollectBy: {
    //     type: mongoose.Types.ObjectId,
    //     ref: Users,
    // },



});