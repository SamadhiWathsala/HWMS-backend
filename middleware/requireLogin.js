const jwt = require("jsonwebtoken")
const { JWD_SECRET } = require("../key/keys")
const Users = require("../models/User");

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        res.status(401).json({ error: "you must be loged in" })
    }

    jwt.verify(authorization, JWD_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "you must be loged in" })
        }

        const { _id } = payload
        Users.findById(_id).then(userData => {
            req.user = userData
            next()
        })

    })
}