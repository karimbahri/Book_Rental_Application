const bookModel = require("../models/bookModel");
const userModel = require("../models/userModel");

exports.findBooks = (req, res) => {
  let filter_object = {};
  if (req.query) filter_object = req.query;
  bookModel
    .find(filter_object)
    .then((data) => {
      res.status(200).json({
        status: "Success",
        length: data.length,
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message || "Error during finding books",
      });
    });
};

exports.createBook = (req, res) => {
  if (!req.body) {
    return res.status(404).json({
      message: "Cannot post empty object",
    });
  }

  const book = new bookModel({
    title: req.body.title,
    cover: req.body.cover,
    description: req.body.description,
    category: req.body.category,
    author: req.body.author,
    price: req.body.price,
    rating: req.body.rating,
    period: req.body.period,
  });

  book
    .save()
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message || "Error during book creation",
      });
    });
};

const getYMD = (days) => {
  const today = new Date();
  today.setDate(today.getDate() + days);
  return `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
};

exports.order_book = async (req, res) => {
  if (!req.body) {
    return res.status(403).json({
      message: "Cannot post empty object",
    });
  }
  if (!req.body.userId || !req.body.bookId) {
    return res.status(403).json({
      message: "undefined userId or bookId",
    });
  }
  const book = await bookModel.findById(req.body.bookId);
  const now = new Date();
  const today = {
    _date: now.getDate(),
    _month: now.getMonth() + 1,
    _year: now.getFullYear(),
  };
  // console.log(today._date, today._month, today._year);
  const checkout_date = `${today._date}-${today._month}-${today._year}`;
  const checkin_date = getYMD(book.period);
  userModel
    .findByIdAndUpdate(
      req.body.userId,
      {
        $push: { orders: { id: req.body.bookId, checkout_date, checkin_date } },
      },
      { useFindAndModify: false }
    )
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: "Cannot update user's orders! User not found",
        });
      } else {
        res.status(200).json({
          status: "Success",
          data,
        });
      }
    })
    .catch((err) => {
      return res.status(404).json({
        message: err.message || "Error during updating user's orders",
      });
    });
};
