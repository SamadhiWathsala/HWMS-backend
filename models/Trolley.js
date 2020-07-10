const mongoose = require("mongoose");

const trolleySchema = require("../schemas/trolleySchema");


const Trolley = mongoose.model('Trolley', trolleySchema);

module.exports = Trolley;