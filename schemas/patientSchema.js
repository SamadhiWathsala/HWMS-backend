const mongoose = require('mongoose');
const Users = require("../models/User");
module.exports = patientSchemas = mongoose.Schema({

    bht: {
        type: String,
        required: true,

    },
    patientName: {
        type: String,
        required: true,

    },
    patientAge: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,

    },
    admissionComplain: {
        type: String,
        required: true,
    },
    patientCategory: {
        type: String,
        required: true,
    },
    sergicalHistory: {
        type: String,
        required: true,
    },
    medicalHistory: {
        type: String,
        required: true,
    },
    allergicDetails: {
        type: String,
        required: true,
    },
    guardian: {
        type: String,
    },

    guardianPhone: {
        type: String,
    },

    houseOfficer: {
        type: mongoose.Types.ObjectId,
        ref: Users,
        required: true
    },

    patientStatus: {
        type: String,
        required: true
    }
    /*
        addmissionDate: {
            type: Date(),
            default: Date.now,
        }
    */


});