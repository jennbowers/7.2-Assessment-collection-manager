const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true}
  , author: {type: String, required: true}
  , seriesTitle: String
  , series: [{
    bookName: {type: String, required: true}
    , order: Number
    }]
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
