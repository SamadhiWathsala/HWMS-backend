const mongoose = require('mongoose');

module.exports = admissionSchemas = mongoose.Schema({

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
    guardianName: {
        type: String,
        required: true,

    },

    guardianPhone: {
        type: String,
        required: true
    },
    houseOfficer: {
        type: String,
        required: true

    },


});