const db = require('./db/dbHelpers');
const sampleData = require('./data/sampleData');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/silverspoon');

db.save({ data: sampleData, model: db.Restaurant }, (result) => {
  if (result) {
    console.log('all added to db');
    mongoose.disconnect();
  }
});
