const dbHelpers = require('./dbHelpers');
const sampleData = require('../data/sampleData');

dbHelpers.save({ data: sampleData, model: dbHelpers.Restaurant }, (result) => {
  if (result) {
    console.log('all data added to database');
  }
});
