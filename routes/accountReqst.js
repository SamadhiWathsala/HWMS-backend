const express = require("express");

const router = express.Router();
const AccountRqst = require("../models/AccountRqst");



//get all account request 
router.get('/', async (req, res) => {
    try {
        const accounts = await AccountRqst.find();
        res.json(accounts);
    }
    catch (e) {
        res.json({ message: e })
    }
});

//Record new user request
router.post('/', async (req, res) => {

    try {
        const newRqst = new AccountRqst({
            userName: req.body.userName,
            email: req.body.email,
            userRole: req.body.userRole,
            staffID: req.body.staffID,
            front: req.body.front,
            back: req.body.back

        });

        const saveNewRqst = await newRqst.save();
        res.json({ saveNewRqst });
    }
    catch (e) {
        res.json({ message: e })
    }



});


//Delete request data from the database
router.delete('/:requestID', async (req, res) => {

    try {
        const requestId = req.params.requestID;
        const deleteRequest = await AccountRqst.deleteOne({ _id: requestId });
        res.json(deleteRequest);
    }
    catch (e) {
        res.json({ message: e })
    }

});



module.exports = router;