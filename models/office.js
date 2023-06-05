const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
    office_id:{
        type: String,
    },
    office_name:{
        type: String,
    },
    office_image:{
        type: String,
    },
    office_timing:{
        type: String,
    },
    office_address:{
        type: String,
    },
    office_phone:{
        type: String,
    },
    lognitude:{
        type: Number,
    },
    latitude:{
        type: Number,
    },
    contact: {
        type: String,
    },
    documents:[new mongoose.Schema({
        doc_id:{
            type: String,
        },
        doc_name:{
            type: String,
        },
    })],
});

const Office = mongoose.model('Office', officeSchema);

module.exports = Office;