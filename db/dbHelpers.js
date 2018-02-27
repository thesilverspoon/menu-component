const mongoose = require('mongoose');
const sampleData = require('../data/sampleData');

mongoose.connect('mongodb://localhost/fec-project');

const restaurantSchema = mongoose.Schema({
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

const Restaurant = mongoose.model('restaurants', restaurantSchema);

const save = (data, Model, cb) => {
  let count = 0;
  data.forEach((item) => {
    const instance = new Model({
      id: item.id,
      name: item.name,
      menu: {
        lunch: item.menu.lunch,
        dinner: item.menu.dinner,
        dessert: item.menu.dessert,
      },
    });
    Model.create(instance, (err, result) => {
      count += 1;
      if (err) {
        console.log('error adding to db ==> ', err);
      }
      if (count === data.length) {
        cb(result);
      }
    });
  });
};

const find = (idNum, Model, cb) => {
  Model.find({ id: idNum }, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports.save = save;
module.exports.find = find;
module.exports.Restaurant = Restaurant;

