const mongoose = require("mongoose");

const patientsSchema = require("../schemas/patientSchema");


const Patients = mongoose.model('Patients', patientsSchema);

module.exports = Patients;