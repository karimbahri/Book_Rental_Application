const mongoose = require('mongoose');
const { isEmail, isNumeric, contains } = require('validator');
const { checkNoSpaces, checkGender } = require("../utils");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Missing fullName !']
    },
    email: {
        type: String,
        required: [true, 'Missing Email'],
        unique: true,
        validate: [isEmail, "invalide email"]
        //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'invalid email address']
    },
    password: {
        type: String,
        required: [true, 'Missing password']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        required: [true, "Missing address"]
    },
    userName : {
        type: String,
        required: [true, "Missing username"],
        unique: true,
        validate: [checkNoSpaces, "invalid username"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Missing phoneNumber"],
        maxlength: 12,
        minlength: 8,
        validate: [isNumeric, "phone number is not valid"]
    },
    zipCode: {
        type: String,
        required: [true, "Missing phoneNumber"],
        validate: [isNumeric, "zip code is not valid"]
    },
    orders: {
        type: [{
            id: mongoose.Schema.Types.ObjectId,
            checkout_date: String,
            checkin_date: String
        }],
        default: []
    },
    created_at: {
        type: String
    }
}/*,
{
    timestamps: true
}*/
);

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
