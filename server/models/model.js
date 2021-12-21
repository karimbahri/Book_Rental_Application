const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Missing Name !']
    },
    email: {
        type: String,
        required: [true, 'Missing Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Missing password']
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
