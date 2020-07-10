const mongoose = require('mongoose');
//const { objectID } = mongoose.Schema.type;

module.exports = accountRqstSchemas = mongoose.Schema({

    userName: {
        type: String,
        required: true,

    },
    staffID: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
    userRole: {
        type: String,
        required: true,
    },
    front: {
        type: String,
        required: true,
    },
    back: {
        type: String,
        required: true,
    }


});