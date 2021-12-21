const userModel = require('../models/model');
const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res) => {
    if (!req.body) {
        return res
        .status(404)
        .json({
            status: 'Failure',
            message: 'Cannot post empty object'
        })
    }
    if (!req.body.password) {
        return res
        .status(404)
        .json({
            status: 'Failure',
            message: 'Password is required'
        })
    }
    const user = new userModel({
        fullName: req.body.fullName,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        password: cryptoJs.AES.encrypt(req.body.password, process.env.ENCRYPTIONKEY)
    });

    user
    .save()
    .then(data => {
        res
          .status(200)
          .json({
              status: 'Success',
              data
          })

    })
    .catch(err => {
        res
          .status(404)
          .json({
            status: 'Failure',
            message: err.message || 'Error during user creation'
          })
    })
}

exports.findUser = (req, res) => {
    let filter_object = {}
    if (req.query)
      filter_object = req.query;
    userModel
      .find(filter_object)
      .then(data => {
          res
            .status(200)
            .json({
                status: 'Success',
                length: data.length,
                data
            })
      })
      .catch(err => {
        res
          .status(404)
          .json({
            status: 'Failure',
            message: err.message || 'Error during finding users'
          })
        })
}

exports.login = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email});
        const {password, ...others} = user._doc;

        let decrypted_pass = cryptoJs.AES.decrypt(password, process.env.ENCRYPTIONKEY);
        decrypted_pass = decrypted_pass.toString(cryptoJs.enc.Utf8);

        console.log(decrypted_pass);
        if (req.body.password !== decrypted_pass)
            return res.status(407)
            .json({
                status: 'Failure',
                message: 'wrong credentials'
            });
        
        res.status(200)
        .json(others);
    }
    catch(err) {
        res
        .status(400)
        .json({
            status: "failure",
            message: err.message || "cannot connect"
        });
    }
}