const mongoose = require('mongoose');

module.exports = patientSchemas = mongoose.Schema({

    bht: {
        type: String,
        required: true,

    },
    patientName: {
        type: String,
        required: true,

    },
    /*
    dateOfBirth: {
        type: Date(),
        required: true,
    }
    */
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
        required: true,
    },

    guardianPhone: {
        type: String,
    },

    houseOfficer: {
        type: String,
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