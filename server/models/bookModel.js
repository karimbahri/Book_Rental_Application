const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Missing title !']
    },
    thumbnail: {
        type: String,
        required: [true, 'Missing thumbnail']
    },
    description: {
        type: String,
        required: [true, 'Missing description']
    },
    price: {
        type: Number,
        required: [true, 'Missing price']
    },
    rating: {
        type: Number,
        default: 5,
        min: 1,
        max: 5
    },
    period: {
        type: Number
    }
}/*,
{
    timestamps: true
}*/
);

const bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel;
