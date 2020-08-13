const express = require("express");

const router = express.Router();
const ChartRqst = require("../models/ChartRqst");
const requireLogin = require("../middleware/requireLogin");
const verifyRole = require("../middleware/verifyRole");


//Request a new chart
router.post('/', async (req, res) => {

    try {
        const newChartRqst = new ChartRqst({
            patientID: req.body.patientID,
            patientName: req.body.patientName,
            address: req.body.patientAddress,
            chartType: req.body.chartType,
            inputTime: req.body.inputTime,
            description: req.body.description
        });

        const saveChartRqst = await newChartRqst.save();
        res.json({ saveChartRqst });
    }
    catch (e) {
        res.json({ message: e })
    }



});