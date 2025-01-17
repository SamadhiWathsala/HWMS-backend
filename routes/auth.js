const express = require("express");
// const nodemailer = require("nodemailer");

const router = express.Router();
const Users = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWD_SECRET } = require('../key/keys');
const requireLogin = require("../middleware/requireLogin");
const verifyRole = require("../middleware/verifyRole");
const verifyAdmin = require("../middleware/verifyAdmin");


router.get('/protected', requireLogin, verifyRole, (req, res) => {
    res.send('hello user')
});


//Add new user to the system
router.post('/addUser', requireLogin, verifyAdmin, async (req, res) => {

    try {


        //find email exist
        const emailExist = await Users.findOne({ email: req.body.email })
        if (emailExist) return res.status(400).send('Email allready exist')

        const newUser = new Users({
            userName: req.body.userName,
            stafID: req.body.staffID,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            userRole: req.body.role,
        });
        console.log(req.body);
        const saveUser = await newUser.save();
        res.json({ saveUser });


    }
    catch (e) {
        res.json({ message: e })
    }



});


//get all users from user collection
router.get('/allUsers', requireLogin, verifyAdmin, async (req, res) => {
    try {

        const users = await Users.find();
        res.json(users);

    }
    catch (e) {
        res.json({ message: e })
    }
});

//get all users who role nurse from user collection
router.get('/nurseStaff', async (req, res) => {
    try {

        const users = await Users.find({userRole : "Nurse"});
        res.json(users);

    }
    catch (e) {
        res.json({ message: e })
    }
});



//Login to the system
router.post('/login', async (req, res) => {

    const { staffID, password } = req.body

    if (!staffID || !password) {
        res.status(422).send('Plese provide all fields')
    }

    //find user exist
    Users.findOne({ stafID: staffID })
        .then((saveUser) => {
            if (!saveUser) {
                return res.status(422).json({ error: "Invalid" });
            }
            bcrypt.compare(password, saveUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // res.json({ message: "success sign!" })
                        //create and asign a token
                        const token = jwt.sign({ _id: saveUser._id, userRole: saveUser.userRole, userName: saveUser.userName }, JWD_SECRET)
                        res.json({ token })
                    }
                    else {
                        return res.status(422).json({ error: "Invalid sign in" });
                    }
                })
        }).catch(err => {
            console.log(err)
        })



    //Delete user from the database
    router.delete('/:userID', requireLogin, verifyAdmin, async (req, res) => {

        try {
            const requestId = req.params.userID;
            const deleteUser = await Users.deleteOne({ _id: requestId });
            res.json(deleteUser);
        }
        catch (e) {
            res.json({ message: e })
        }

    });


    //get a single test from tests collection
    router.get('/:userID', async (req, res) => {
        try {
            const userId = req.params.userID;
            const user = await Users.findById(userId);
            res.json(user);
        }
        catch (e) {
            res.json({ message: e })
        }
    });



    //res.header('authorization',token)    

    //res.send('loged in')


})







module.exports = router;
