const Books = require('../models/books');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = {
  editBookDetail: function(req, res) {
    // console.log(req);
    var id = req.params.id;
    Books.findOne({_id: id}).then(function(result) {
      // console.log(result);
      if (req.body.editTitle) {
        result.title = req.body.editTitle;
      }
      if (req.body.editAuthor) {
        result.author = req.body.editAuthor;
      }
      if (req.body.editSeriesTitle) {
        result.seriesTitle = req.body.editSeriesTitle;
      }
      if (req.body.editSeriesBookname && req.body.editSeriesOrder) {
        var series = {bookName: req.body.editSeriesBookname , order: req.body.editSeriesOrder};
        result.series.push(series);
      } else if (req.body.editSeriesBookname && !req.body.editSeriesOrder) {
        series = {bookName: req.body.editSeriesBookname};
        result.series.push(series);
      } else if (!req.body.editSeriesBookname && req.body.editSeriesOrder){
        res.redirect('/error');
      }
      console.log(result);
      result.save();
      res.redirect('/');
    });
  }
};
