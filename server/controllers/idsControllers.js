const idModel = require("../models/idsModel");

exports.addId = (id_to_insert, email) => {
    const newId = new idModel({
        id: id_to_insert,
        email
    });

    newId.save();
}


exports.getIds = (req, res) => {
    idModel
    .find({})
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
          message: err.message || 'Error during finding users ids'
        })
      })
}

exports.deleteId = (email) => {
  idModel
    .findOneAndRemove({email})
    .then(() => console.log('id deleted'))
    .catch(() => console.log('id not deleted properly'));
}
