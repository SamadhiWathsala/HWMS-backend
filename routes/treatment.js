const express = require("express");

const router = express.Router();
const Treatment = require("../models/Treatment");



//get all treatment documents from treatment collection
router.get('/', async (req, res) => {
    try {
        const treatments = await Treatment.find();
        res.json(treatments);
    }
    catch (e) {
        res.json({ message: e })
    }
});


//get a single treatment document from treatment collection
router.get('/:treatmentID', async (req, res) => {
    try {
        const treatmentId = req.params.treatmentID;
        const treatment = await Treatment.findById(treatmentId);
        res.json(treatment);
    }
    catch (e) {
        res.json({ message: e })
    }
});


//Request a new treatment
router.post('/', async (req, res) => {

    try {
        const newTreatment = new Treatment({
            bht: req.body.bht,
            patientName: req.body.patientName,
            //requestedDate: req.body.requestedDate,
            treatmentType: req.body.treatmentType,
            drugDetails: req.body.drugDetails,
            //treatTime: req.body.treatTime,
        });

        const saveTreatment = await newTreatment.save();
        res.json({ saveTreatment });
    }
    catch (e) {
        res.json({ message: e })
    }



});




//updating exsit treatment data
router.put('/:treatmentID', async (req, res) => {

    try {
        const treatmentId = req.params.treatmentID;
        const updateTreatment = await Treatment.updateOne({ _id: treatmentId }, {
            $set: {

                treatmentType: req.body.treatmentType,
                drugDetails: req.body.drugDetails,
                //treatTime: req.body.treatTime,

            }
        })
        res.json({ updateTreatment });
    }
    catch (e) {
        res.json({ message: e });
    }

});


//Delete a treatment from treatment collection
router.delete('/:treatmentID', async (req, res) => {

    try {
        const treatmentId = req.params.treatmentID;
        const deleteTreatment = await Treatment.deleteOne({ _id: treatmentId });
        res.json(deleteTreatment);
    }
    catch (e) {
        res.json({ message: e })
    }

});



module.exports = router;