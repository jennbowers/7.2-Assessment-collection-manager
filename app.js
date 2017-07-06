const express = require('express');
const mongoose = require('mongoose');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const Books = require('./models/books');
const indexController = require('./controllers/indexController');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// all things mongoose
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/bookcollection');

// requests
// render index page and all books in db
app.get('/', indexController.renderAllIndex);

// add a new book to the collection and have it added to the list when the page is refreshed
app.post('/add', indexController.addBooks);

// go to detail page when click on book
app.post('/detail/:id', indexController.toDetail);

app.listen(3000, function() {
  console.log('Successfully started express application');
});

// -------ADDING DATA TO DATABASE (had to redo from earlier project)
// book not in a series
// const book = new Books({
//   title: 'The Truth About Forever'
//   , author: 'Sarah Dessen'
// });
//
// book.save();

// book in a series
// const book = new Books({
//   title: 'One for the Money'
//   , author: 'Janet Evanovich'
//   , seriesTitle: 'Stephanie Plum'
// });
//
// book.save();
//
// const series = {bookName: 'One for the Money', order: 1};
// book.series.push(series);
// book.save();

// pushing in another book to the stephanie plum series
// Books.findOne({title: 'One for the Money'}).then(function(result) {
//   // console.log(result);
//   if (result) {
//     const series = {bookName: 'Two for the Dough', order: 2};
//     result.series.push(series);
//     result.save();
//   }
// });

// console.log(book.toObject());
