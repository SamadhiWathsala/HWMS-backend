const mongoose = require("mongoose");

const treatmentSchema = require("../schemas/treatmentScema");


const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;