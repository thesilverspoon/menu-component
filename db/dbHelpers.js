const mongoose = require('mongoose');
const sampleData = require('../data/sampleData');

mongoose.connect('mongodb://localhost/fec-project');

const restaurantSchema = mongoose.Schema({
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

const Restaurant = mongoose.model('restaurants', restaurantSchema);

const save = (data, Model) => {
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
    instance.save((err) => {
      count += 1;
      if (err) {
        console.log('error adding items to db', err);
      } else if (count === data.length) {
        console.log('items successfully added to db');
        mongoose.disconnect();
      }
    });
  });
};

const find = (idNum, Model, callback) => {
  Model.find({ id: idNum }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
    mongoose.disconnect();
  });
};

module.exports.save = save;
module.exports.find = find;
module.exports.Restaurant = Restaurant;

