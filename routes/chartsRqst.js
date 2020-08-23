const express = require("express");

const router = express.Router();
const ChartRqst = require("../models/ChartRqst");
const requireLogin = require("../middleware/requireLogin");
const verifyRole = require("../middleware/verifyRole");


// //get all chart request detail from chartRequest collection
// router.get('/', requireLogin, async (req, res) => {
//     try {
//         const charts = await Treatment.find();
//         res.json(treatments);
//     }
//     catch (e) {
//         res.json({ message: e })
//     }
// });

//Request a new chart
router.post('/', async (req, res) => {

    try {

        const newChartRqst = new ChartRqst({
            patientName: req.body.patientName,
            patientID: req.body.patientID,
            address: req.body.address,
            chartType: req.body.chartType,
            inputTime: req.body.inputTime,
            description: req.body.description
        });

        const saveChartRqst = await newChartRqst.save();
        res.json({ saveChartRqst });
    }
    catch (err) {
        res.json({ message: err })
    }
})