const dbHelpers = require('../dbHelpers');
const mongoose = require('mongoose');
const seed = require('./testData');

describe('database helpers - save and find', () => {
  beforeAll((done) => {
    mongoose.connect('mongodb://localhost/testDB');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      seed.TestColl.remove({}, () => {
        dbHelpers.save(seed.testData, seed.TestColl, (result) => {
          if (result) {
            done();
          }
        });
      });
    });
  });

  it('should save all data items to test database', (done) => {
    expect.assertions(2);
    dbHelpers.find({}, seed.TestColl, (err, docs) => {
      if (err) { throw err; }
      expect(docs.length).toBe(8);
      expect(docs[0].id).toBe(90976);
      done();
    });
  });
  // nb: the sample data contains a duplication of the restaurant with id: 89104
  it('should not save duplicate restaurants', async (done) => {
    expect.assertions(2);
    dbHelpers.find({ id: 89104 }, seed.TestColl, (err, docs) => {
      if (err) { throw err; }
      expect(docs.length).toBe(1);
      expect(docs[0].id).toBe(89104);
      done();
    });
  });

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
