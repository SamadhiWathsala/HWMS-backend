const express = require("express");

const router = express.Router();
const Treatment = require("../models/Treatment");
const requireLogin = require("../middleware/requireLogin");
const verifyRole = require("../middleware/verifyRole");



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


//get all treatment details for particular patient
router.get('/treats/:pID', async (req, res) => {
    try {
        const patientID = req.params.pID
        const treatments = await (await Treatment.find()).filter(x => x.treatmentStatus === "In progress" && x.patientID === patientID);
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
router.post('/', requireLogin, verifyRole, async (req, res) => {

    try {
        const newTreatment = new Treatment({
            patientID: req.body.patientID,
            patientName: req.body.patientName,
            address: req.body.patientAddress,
            treatmentType: req.body.treatmentType,
            drugDetails: req.body.drugDetails,
            treatmentStatus: req.body.treatmentStatus,
            treatTime: req.body.treatTime,
            fastingHour: req.body.fastingHour,
            description: req.body.description
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