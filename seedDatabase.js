const db = require('./db/dbHelpers');
const sampleData = require('./data/sampleData');
const mongoose = require('mongoose');

const connection = process.env.PORT ? `mongodb://${process.env.UNAME}:${process.env.PWORD}@ds259768.mlab.com:59768/menu_comp` : 'mongodb://localhost/silverspoon';

mongoose.connect(connection);

db.save({ data: sampleData, model: db.Restaurant }, (result) => {
  if (result) {
    console.log('all added to db');
    mongoose.disconnect();
  }
});
