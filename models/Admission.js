const mongoose = require("mongoose");

const admissionSchema = require("../schemas/admissionSchema");


const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;