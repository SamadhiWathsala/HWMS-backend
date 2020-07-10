const mongoose = require("mongoose");

const accountRqstSchemas = require("../schemas/accountRqstSchema");


const AccountReq = mongoose.model('AccountReq', accountRqstSchemas);

module.exports = AccountReq;