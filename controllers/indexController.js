const Books = require('../models/books');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = {
  renderAllIndex: function(req, res) {
    Books.find({}).then(function(results) {
      console.log(results);
      res.render('index', {model: results});
    });
  }
  , addBooks: function(req, res) {
    const book = new Books({
      title: req.body.bookTitle
      , author: req.body.author
    });
    book.save();
    res.redirect('/');
  }
  , toDetail: function(req, res) {
    var id = req.params.id;
    Books.findOne({_id: id})
  }
};
