const dbHelpers = require('../dbHelpers');
const mongoose = require('mongoose');

describe('database helpers - save and find', () => {
  it('should save all data items to test database', (done) => {
    expect.assertions(1);
    dbHelpers.find({ query: '{}', model: dbHelpers.Restaurant }, (err, docs) => {
      if (err) { throw err; }
      expect(docs.length).toBe(119);
      done();
    });
  });

  // nb: the sample data contains a duplication of the restaurant with id: 89104
  it('should not save duplicate restaurants', async (done) => {
    expect.assertions(2);
    dbHelpers.find({ id: 89104, model: dbHelpers.Restaurant }, (err, docs) => {
      if (err) { throw err; }
      expect(docs.length).toBe(1);
      expect(docs[0].id).toBe(89104);
      done();
    });
  });

  it('should return specified data fields only', (done) => {
    expect.assertions(4);
    dbHelpers.find({ query: 'id menu.dinner', model: dbHelpers.Restaurant }, (err, docs) => {
      if (err) { throw err; }
      const docsObj = docs[0].toObject();
      expect(docs.length).toBe(1);
      expect(docs[0].id).toBe(90976);
      expect(Object.keys(docsObj)).toEqual(expect.arrayContaining(['menu', 'id', '_id']));
      expect(Object.keys(docsObj.menu)).toEqual(expect.arrayContaining(['dinner']));
      done();
    });
  });

  afterAll((done) => {
    mongoose.disconnect(done);
  });
});
