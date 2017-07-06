const Books = require('../models/books');

module.exports = {
  renderAllIndex: function(req, res) {
    Books.find({}).then(function(results) {
      console.log(results);
      res.render('index', {model: results});
    });
  }
};
