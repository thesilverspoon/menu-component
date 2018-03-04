const db = require('./db/dbHelpers');
const sampleData = require('./data/sampleData');

db.mongoose.connect('mongodb://localhost/silverspoon');

db.save({ data: sampleData, model: db.Restaurant }, (result) => {
  if (result) {
    console.log('all data added to database');
  }
});
