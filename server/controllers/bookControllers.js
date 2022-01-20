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

exports.deleteBook = (req, res) => {
  bookModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      if (data) {
        res.status(200).json({
          status: "success",
          data,
        });
      } else {
        res.status(400).json({
          message: "Cannot delete book! book not found",
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message,
      });
    });
};

const getYMD = (days) => {
  const today = new Date();
  today.setDate(today.getDate() + days);
  // return `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  return `${today.toDateString()}`;
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
  const checkout_date = /*`${today._date}-${today._month}-${today._year}`*/ `${now.toDateString()}`;
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
      }
      if (!req.body.userId || !req.body.bookId) {
        return res.status(403).json({
          message: "undefined userId or bookId",
        });
      }
    })
    .catch((err) => {
      return res.status(404).json({
        message: err.message || "Error during updating user's orders",
      });
    });
};

exports.renounceBook = async (req, res) => {
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
  userModel
    .findByIdAndUpdate(req.body.userId, {
      $pull: { orders: { _id: req.body.bookId } },
    })
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: "Cannot delete user's orders! User not found",
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
        message: err.message || "Error during deleting user's orders",
      });
    });
};

exports.findUserBooks = async (req, res) => {
  if (!req.params.userId)
    return res.status(403).json({
      message: err.message || "undefined userId",
    });

  try {
    const { orders } = await userModel.findById(req.params.userId);
    const promise = orders.map(async (order) => {
      const book_data = await bookModel.findById(order.id);
      const book = {
        checkout_date: order.checkout_date,
        checkin_date: order.checkin_date,
        book_data,
      };
      return book;
    });
    const userBooks = {
      data: await Promise.all(promise),
    };
    res.status(200).json({
      books: userBooks,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message || "Error during finding user's books",
    });
  }
  // .then((data) => {
  //   res.status(200).json({
  //     status: "Success",
  //     data: data.orders,
  //   });
  // })
  // .catch((err) => {
  //   res.status(404).json({
  //     message: err.message || "Error during finding users",
  //   });
  // });
};
