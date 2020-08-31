const express = require("express");

const router = express.Router();
const Test = require("../models/Test");
const requireLogin = require("../middleware/requireLogin");
const verifyRole = require("../middleware/verifyRole");
const verifystaff = require("../middleware/verifystaff");


//data according to their status and category
//get all tests from test collection
router.get('/', requireLogin, verifystaff, async (req, res) => {
    try {
        const tests = await (await Test.find()).filter(x => x.testStatus == "pending");
        res.json(tests);
    }
    catch (e) {
        res.json({ message: e })
    }
});


//get all test details for particular patient
router.get('/:pID/Tests', requireLogin, verifystaff, async (req, res) => {
    try {
        const patientId = req.params.pID
        const patientTest = await (await Test.find()).filter(x => x.patientID == patientId);
        res.json(patientTest);
    }
    catch (e) {
        res.json({ message: e })
    }
});



//get a single test from tests collection
router.get('/:testID', async (req, res) => {
    try {
        const testId = req.params.testID;
        const test = await Test.findById(testId);
        res.json(test);
    }
    catch (e) {
        res.json({ message: e })
    }
});


//Request a new test
router.post('/', requireLogin, verifyRole, async (req, res) => {

    try {
        const newTest = new Test({
            testCategory: req.body.testCategory,
            testName: req.body.testName,
            testDescription: req.body.testDescription,
            testStatus: req.body.testStatus,
            patientID: req.body.patientID,
            patientName: req.body.patientName,
            address: req.body.patientAddress,
            collectionState: req.body.collectionState,
            fastingHours: req.body.fastingHours
        });

        const saveTest = await newTest.save();
        res.json({ saveTest });
    }
    catch (e) {
        res.json({ message: e })
    }



});




//updating exsit test data
router.put('/:testID', async (req, res) => {

    try {
        const testId = req.params.testID;
        const updateTest = await Test.updateOne({ _id: testId }, {
            $set: {
                testStatus: req.body.testStatus,
                sampleCollectBy: {
                    _id: decodeToken._id,
                    userName: decodeToken.userName,
                    staffID: decodeToken.staffID
                },
            }
        })
        res.json({ updateTest });
    }
    catch (e) {
        res.json({ message: e });
    }
});


//Delete a test from test collection
router.delete('/:testID', async (req, res) => {

    try {
        const testId = req.params.testID;
        const deleteTest = await Test.deleteOne({ _id: testId });
        res.json(deleteTest);
    }
    catch (e) {
        res.json({ message: e })
    }

});



module.exports = router;