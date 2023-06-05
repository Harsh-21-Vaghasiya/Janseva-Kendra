const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    doc_id:{
        type: String,
    },
    doc_name:{
        type: String,
    },
    doc_image:{
        type: String,
    },
    doc_discription:{
        type: String,
    },
    required_documents:[new mongoose.Schema({
        doc_id:{
            type: String,
        },
        doc_name:{
            type: String,
        },
    })],
    online_site:{
        type: String,
    },
    video_link:{
        type: String,
    },
    esteemated_time:{
        type: String,
    },
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;