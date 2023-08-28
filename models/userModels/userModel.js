const mongoose = require('mongoose');

const useSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: 'true'
        },
        password: {
            type: String,
            require: 'true'
        },
        email: {
            type: String,
            require: 'true'
        },
        mobile: {
            type: Number,
            required: true
        },
        token: {
            type: String,
            required: false
        }

    }, { timestamps: true }
);

module.exports = mongoose.model("User", useSchema);