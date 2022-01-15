const mongoose = require('mongoose');

const idSchema = mongoose.Schema({
    id: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''      
    }
}
);

const idModel = mongoose.model('ids', idSchema);

module.exports = idModel;
