const mongoose = require("mongoose");

const testSchema = require("../schemas/testSchema");


const Test = mongoose.model('Test', testSchema);

module.exports = Test;