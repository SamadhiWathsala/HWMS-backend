const mongoose = require('mongoose');

module.exports = trolleySchemas = mongoose.Schema({

    itemName: {
        type: String,
        required: true,

    },
    quantity: {
        type: String,
        required: true,

    },
    itemStatus: {
        type: String,
        required: true,

    },
    expireDate: {
        type: String,
        required: true,
    }


});