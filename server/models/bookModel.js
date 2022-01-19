const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Missing title !"],
    },
    cover: {
      type: String,
      required: [true, "Missing cover"],
    },
    description: {
      type: String,
      required: [true, "Missing description"],
    },
    category: {
      type: String,
      required: [true, "Missing Category"],
    },
    author: {
      type: String,
      required: [true, "Missing Author"],
    },
    price: {
      type: Number,
      // required: [true, "Missing price"],
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    period: {
      type: Number,
    },
  } /*,
{
    timestamps: true
}*/
);

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
