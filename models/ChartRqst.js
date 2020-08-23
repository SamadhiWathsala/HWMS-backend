const mongoose = require("mongoose");

const chartRqstSchema = require("../schemas/chartRqstSchema");


const ChartRqst = mongoose.model('ChartRqst', chartRqstSchema);

module.exports = ChartRqst;