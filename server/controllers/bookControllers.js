const bookModel = require('../models/bookModel');

exports.findUser = (req, res) => {
    let filter_object = {}
    if (req.query)
      filter_object = req.query;
      bookModel
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
            message: err.message || 'Error during finding books'
          })
        })
}

exports.createBook = (req, res) => {
    if (!req.body) {
        return res
        .status(404)
        .json({
            status: 'Failure',
            message: 'Cannot post empty object'
        })
    }

    const book = new bookModel({
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        duration: req.body.duration
    });

    book
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
            message: err.message || 'Error during book creation'
          })
    })
}