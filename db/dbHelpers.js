const mongoose = require('mongoose');
const sampleData = require('../data/sampleData');

mongoose.connect('mongodb://localhost/fec-project');

const restaurantSchema = mongoose.Schema({
  id: Number,
  name: String,
  menu: {
    lunch: [Object],
    dinner: [Object],
    dessert: [Object],
  },
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

const save = (data) => {
  data.forEach((item) => {
    const restaurant = new Restaurant({
      id: item.id,
      name: item.name,
      menu: {
        lunch: item.menu.lunch,
        dinner: item.menu.dinner,
        dessert: item.menu.dessert,
      },
    });
    restaurant.save((err) => {
      if (err) {
        console.log('error adding item to db');
      } else {
        console.log('item successfully added to db');
      }
    });
  });
};

save(sampleData);
module.exports.save = save;
