const express = require("express");

const router = express.Router();
const Test = require("../models/Test");
const requireLogin = require("../middleware/requireLogin");
const verifyRole = require("../middleware/verifyRole");


//data according to their status and category
//get all tests from test collection
router.get('/', async (req, res) => {
    try {
        const tests = await (await Test.find()).filter(x => x.testCategory === "Urine" && x.testStatus === "Pending");
        res.json(tests);
    }
    catch (e) {
        res.json({ message: e })
    }
});

//fetch all test of particular patient
router.get('/patient/:bht', async (req, res) => {
    try {
        const patientBHT = req.params.bht
        const tests = await (await Test.find()).filter(x => x.bht === patientBHT);
        res.json(tests);
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
            address: req.body.patientAddress

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

                testCategory: req.body.testCategory,
                testName: req.body.testName,
                testDescription: req.body.testDescription,
                testStatus: req.body.testStatus,

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