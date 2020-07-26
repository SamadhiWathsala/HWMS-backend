const jwt = require("jsonwebtoken")
const { JWD_SECRET } = require("../key/keys")


module.exports = (req, res, next) => {
    var token = req.headers['authorization']

    if (token) {
        try {
            var decoded = jwt.decode(token, JWD_SECRET);
            if (decoded.exp < Date.now()) {
                return res.end('token expired', 401);
            }
            role = decoded.userRole;

            if (role == 'HO') {
                next();
            } else {
                return res.status(401).json({ error: "Invalid credentials" })
            }


        } catch (err) {
            return res.status(401);
            return res.send('no token');
        }
    }



}