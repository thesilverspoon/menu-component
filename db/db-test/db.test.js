const dbHelpers = require('../dbHelpers');
const mongoose = require('mongoose');
const seed = require('./fakeData');

describe('Database Tests', () => {
  beforeAll((done) => {
    mongoose.connect('mongodb://localhost/testDB');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('We are connected to test database!');
      seed.TestColl.remove({}, () => {
        dbHelpers.save(seed.testData, seed.TestColl, (result) => {
          if (result) {
            console.log('====>', result);
            done();
          }
        });
      });
    });
  });

  // Save object with 'name' value of 'Mike"
  it('should save data the correct data to test database', async (done) => {
    expect.assertions(2);
    dbHelpers.find(90976, seed.TestColl, (err, docs) => {
      if (err) { throw err; }
      console.log('data ===> ', docs);
      expect(docs.length).toBe(1);
      expect(docs[0].id).toBe(90976);
      done();
    });
  });

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close();
      done();
    });
  });
});
