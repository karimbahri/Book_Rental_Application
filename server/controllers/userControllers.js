const userModel = require('../models/userModel');
const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const {isStrongPassword} = require("validator");
const { v4: uuidv4 } = require('uuid');

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
    if (/*req.body.password.length < 8*/ isStrongPassword(req.body.password)) {
        return res
        .status(404)
        .json({
            status: 'Failure',
            message: 'password is shorter than the minimum allowed length (8).'
        })
    }
    const user = new userModel({
        fullName: req.body.fullName,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        password: req.body.password/*cryptoJs.AES.encrypt(req.body.password, process.env.ENCRYPTIONKEY)*/,
        address: req.body.address,
        userName: req.body.userName,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
        gender: req.body.gender
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

exports.updateUser = (req, res) => {
    if (!req.body) {
        return res
          .status(404)
          .json({
            status: 'Failure',
            message: 'Cannot put empty object'
        })
    }
    userModel
      .findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
      .then(data => {
          if (!data) {
            return res
            .status(400)
            .json({
              status: 'Failure',
              message: 'Cannot update user! User not found'
          })
          }
          else {
            res
              .status(200)
              .json({
                status: 'Success',
                data
            })
          }
      })
      .catch(err => {
        return res
        .status(400)
        .json({
            status: 'Failure',
            message: err.message || 'Error during updating user'
        })
    })
}

exports.deleteUser = (req, res) => {
    userModel
      .findByIdAndDelete(req.params.id)
      .then(data => {
          if (data) {
              res
                .status(200)
                .json({
                    status: 'success',
                    data
                })
          }
          else {
              res
                .status(400)
                .json({
                    status: 'failure',
                    message: 'Cannot delete user! user not found'
                })
          }
      })
      .catch(err => {
          res
            .status(400)
            .json({
                status: 'failure',
                message: err.message
            })
      })
}


exports.login = async (req, res) => {
    try {
        const user = await userModel.findOne({userName: req.body.userName});
        
        if (user)
        {
            const {password, ...others} = user._doc;

            // let decrypted_pass = cryptoJs.AES.decrypt(password, process.env.ENCRYPTIONKEY);
            // decrypted_pass = decrypted_pass.toString(cryptoJs.enc.Utf8);

            // console.log(decrypted_pass);
            if (req.body.password !== /*decrypted_pass*/password)
                return res.status(407)
                .json({
                    status: 'Failure',
                    message: 'wrong password'
                });

            res.status(200)
            .json({
                ...others,
                token: uuidv4()
            });
        }
        else {
            return res.status(407)
            .json({
                status: 'Failure',
                message: 'userName does not exist'
            });
        }
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
