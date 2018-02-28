const mongoose = require('mongoose');

const testData = [
  {
    id: 90976,
    name: 'Beard Papa\'s',
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
  },
  {
    id: 90826,
    name: 'Tpumps',
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
  },
  {
    id: 89104,
    name: 'Tokyo Katana-Ya',
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
  },
  {
    id: 87260,
    name: 'Senor Sisig',
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
  },
  {
    id: 86567,
    name: 'Poke Bar',
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
  },
  {
    id: 86549,
    name: 'Crepes Sil Vous Plait',
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
  },
  {
    id: 86358,
    name: 'Tartine Manufactory',
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
  },
  {
    id: 86116,
    name: 'Popsons',
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
  },
];

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

const TestColl = mongoose.model('test-coll', testSchema);

module.exports = { TestColl, testData };
