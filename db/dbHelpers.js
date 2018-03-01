const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/fecproject');

const restaurantSchema = mongoose.Schema({
  id: { type: Number, unique: true },
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

const save = (options, cb) => {
  mongoose.connect('mongodb://localhost/fecproject');
  const { data } = options;
  const Model = options.model;
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
    Model.on('index', (error) => {
      console.log(error);
      Model.create(instance, (err, result) => {
        if (err) {
          console.log('error adding to db ==> ', err);
        }
        count += 1;
        if (count === data.length) {
          cb(result);
          mongoose.disconnect();
        }
      });
    });
  });
};

const find = (options, cb) => {
  mongoose.connect('mongodb://localhost/fecproject');
  const query = options.query || 'id menu.lunch';
  const idNum = options.id || 90976;

  if (query === '{}') {
    Restaurant.find({}).exec((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
        mongoose.disconnect();
      }
    });
  } else {
    Restaurant.find({ id: idNum }).select(query).exec((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
        mongoose.disconnect();
      }
    });
  }
};

module.exports.save = save;
module.exports.find = find;
module.exports.Restaurant = Restaurant;

