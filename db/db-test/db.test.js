const dbHelpers = require('../dbHelpers');
const mongoose = require('mongoose');


const url = 'mongodb://localhost/testDB';

const testSchema = mongoose.Schema({
  id: { type: Number, index: { unique: true } },
  name: String,
  menu: {
    lunch: [{
      foodItem: String,
      cost: Number,
      tags: String,
    }],
    dinner: [{
      foodItem: String,
      cost: Number,
      tags: String,
    }],
    dessert: [{
      foodItem: String,
      cost: Number,
      tags: String,
    }],
  },
});

const TestColl = mongoose.model('specColl', testSchema);

const testItem = new TestColl({
  id: 9871,
  name: 'Mat\' test resaturant',
  menu: {
    lunch: [{
      foodItem: 'tasty bacon',
      cost: 10,
      tags: 'gluten-free',
    }],
    dinner: [{
      foodItem: 'bacon soup',
      cost: 11,
      tags: 'vegan',
    }],
    dessert: [{
      foodItem: 'maple bacon pancakes',
      cost: 12,
      tags: 'vegetarian',
    }],
  },
});

describe('Database Tests', () => {
  let data = '';
  // Before starting the test, create a sandboxed database connection
  // Once a connection is established invoke done()
  beforeAll((done) => {
    mongoose.connect(url);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('We are connected to test database!', url);
      done();
    });
  });

  beforeEach((done) => {
    TestColl.remove({}, () => {
      console.log('collection dropped');
      dbHelpers.save([testItem], TestColl, (result) => {
        if (result) {
          done();
        }
      });
    });
  });

  // Save object with 'name' value of 'Mike"
  it('should save data to test database', async (done) => {
    expect.assertions(1);
    dbHelpers.find(9871, TestColl, (err, docs) => {
      if (err) { throw err; }
      data = docs;
      console.log('data ===> ', docs);
      expect(data.length).toBe(1);
      done();
    });
  });

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
