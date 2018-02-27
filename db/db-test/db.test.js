const dbHelpers = require('../dbHelpers');
const mongoose = require('mongoose');


const url = 'mongodb://localhost/testDB';

const testSchema = mongoose.Schema({
  id: Number,
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

const TestColl = mongoose.model('TestRestaurants', testSchema);

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

describe('Database Tests', function() {
  // Before starting the test, create a sandboxed database connection
  // Once a connection is established invoke done()
  beforeAll((done) => {
    mongoose.connect('mongodb://localhost/testDatabase');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('We are connected to test database!');
      done();
    });
  });
  // Save object with 'name' value of 'Mike"
  it('Data saved to test database', (done) => {
    dbHelpers.save([testItem], TestColl);
    done();
  });

  it('Should retrieve data from test database', (done) => {
  // Look up the 'Mike' object previously saved.
    // TestColl.find({ id: 9871 }, (err, data) => {
    //   if (err) { throw err; }
    //   console.log(data[0].menu.lunch);
    dbHelpers.find(9871, TestColl, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // expect(data[0].id).toBe(9871);
        console.log(data);
      }
      done();
    });
  });


  afterAll(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
