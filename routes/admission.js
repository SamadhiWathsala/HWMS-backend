const express = require("express");

const router = express.Router();
const Admission = require("../models/Admission");
const requireLogin = require("../middleware/requireLogin");

//get all admission request from admission collection
router.get('/', requireLogin, async (req, res) => {
    try {

        const admissions = await Admission.find();
        res.json(admissions);

    }
    catch (e) {
        res.json({ message: e })
    }
});



//Add new patient to the ward from nurse level 
router.post('/', requireLogin, async (req, res) => {

    try {
        const newAdmission = new Admission({
            bht: req.body.bht,
            patientName: req.body.patientName,
            patientAge: req.body.patientAge,
            address: req.body.address,
            admissionComplain: req.body.admissionComplain,
            guardianName: req.body.guardianName,
            guardianPhone: req.body.guardianPhone
        });

        const saveAdmission = await newAdmission.save();
        res.json({ saveAdmission });
    }
    catch (e) {
        res.json({ message: e })
    }



});


//Delete admission request data from the database
router.delete('/:admissionID', async (req, res) => {

    try {
        const admissionId = req.params.admissionID;
        const deleteAdmission = await Admission.deleteOne({ _id: admissionId });
        res.json(deleteAdmission);
    }
    catch (e) {
        res.json({ message: e })
    }

});





module.exports = router;