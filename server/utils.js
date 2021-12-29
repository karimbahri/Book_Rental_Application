const { contains } = require('validator');
const jwt = require("jsonwebtoken");

exports.checkNoSpaces = (userName) => {
    return !contains(userName, " ");
}

exports.checkGender = (gender) => {
    return (gender !== "Male" && gender !== "Female" && gender !== "Undefined") ? false : true;
}

exports.generateToken = (user) => {
    return jwt.sign(
        {
            fullName: req.body.fullName,
            email: req.body.email,
            isAdmin: req.body.isAdmin,
            address: req.body.address,
            userName: req.body.userName,
            phoneNumber: req.body.phoneNumber,
            zipCode: req.body.zipCode,
            gender: req.body.gender
        },
        process.env.JWT_KEY,
        {
            expiresIn: "40d"
        }
    )
}
