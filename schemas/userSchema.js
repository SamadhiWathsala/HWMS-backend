const mongoose = require('mongoose');
//const { objectID } = mongoose.Schema.type;

module.exports = userSchemas = mongoose.Schema({

    userName: {
        type: String,
        required: true,
    },
    stafID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userRole: {
        type: String,
        required: true,
    },


});