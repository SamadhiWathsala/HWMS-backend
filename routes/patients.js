const express = require("express");

const router = express.Router();
const Patients = require("../models/Patients");
const requireLogin = require("../middleware/requireLogin");
const { options } = require("./trolley");
const verifyNurse = require("../middleware/verifyNurse");
const verifyRole = require("../middleware/verifyRole");
const { decode } = require("jsonwebtoken");
const verifystaff = require("../middleware/verifystaff");

//get all patients from patient collection
router.get('/', requireLogin, verifystaff, async (req, res) => {
    try {

        const patients = await Patients.find().sort("patientStatus");
        res.json(patients);

    }
    catch (e) {
        res.json({ message: e })
    }
});


//get patients who are added by particular house officer
router.get('/myPatients/:hoID', requireLogin, verifyRole, async (req, res) => {
    try {
        const patients = await Patients.find({ houseOfficer: req.params.hoID }).sort("patientStatus");
        res.json(patients)
    }
    catch (e) {
        res.json({ message: e })
    }
})


//get a single patients from patients collection
router.get('/:patientID', requireLogin, verifystaff, async (req, res) => {
    try {
        const patientId = req.params.patientID;
        const patient = await Patients.findById(patientId);
        res.json(patient);
    }
    catch (e) {
        res.json({ message: e })
    }
});



//Add new patient to the ward 
router.post('/admit', requireLogin, verifyRole, async (req, res) => {

    try {

        let token = req.headers["authorization"]
        let decodeToken = decode(token)

        const newPatient = new Patients({
            bht: req.body.bht,
            patientName: req.body.patientName,
            patientAge: req.body.patientAge,
            address: req.body.address,
            admissionComplain: req.body.admissionComplain,
            patientCategory: req.body.patientCategory,
            patientStatus: req.body.patientStatus,
            sergicalHistory: req.body.sergicalHistory,
            medicalHistory: req.body.medicalHistory,
            allergicDetails: req.body.allergicDetails,
            houseOfficer: {
                _id: decodeToken._id,
                userName: decodeToken.userName,
                staffID: decodeToken.staffID
            },
            guardian: req.body.guardian,
            guardianPhone: req.body.guardianPhone
            //addmissionDate: Date.now,
        });

        const savePatient = await newPatient.save();
        res.json({ savePatient });
    }
    catch (e) {
        res.json({ message: e })
    }



});




//updating exsit patient data
router.put('/:patientID', requireLogin, verifyRole, async (req, res) => {

    try {
        const patientId = req.params.patientID;
        const updatePatient = await Patients.updateOne({ _id: patientId }, {
            $set: {

                patientName: req.body.patientName,
                //dateOfBirth: req.body.quantity,
                contactNumber: req.body.contactNumber,
                address: req.body.address,
                admissionComplain: req.body.admissionComplain,
                patientCategory: req.body.patientCategory,
                sergicalHistory: req.body.sergicalHistory,
                medicalHistory: req.body.medicalHistory,
                allergicDetails: req.body.allergicDetails,
                houseOfficer: req.body.houseOfficer
            }
        })
        res.json({ updatePatient });
    }
    catch (e) {
        res.json({ message: e });
    }

});



//Delete patients data from the database
router.delete('/:patientID', async (req, res) => {

    try {
        const patientId = req.params.patientID;
        const deletePatient = await Patients.deleteOne({ _id: patientId });
        res.json(deletePatient);
    }
    catch (e) {
        res.json({ message: e })
    }

});



module.exports = router;