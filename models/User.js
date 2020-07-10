const mongoose = require("mongoose");

const usersSchema = require("../schemas/userSchema");


const Users = mongoose.model('Users', usersSchema);

module.exports = Users;