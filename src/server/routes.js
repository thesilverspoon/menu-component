const models = require('./models');
const router = require('express').Router();

router.get('/menu/lunch', models.menuType);

router.get('/menu/dinner', models.menuType);

router.get('/menu/dessert', models.menuType);

router.get('/menu/glutenFree', models.filterBy);

router.get('/menu/vegan', models.filterBy);

router.get('/menu/vegetarian', models.filterBy);

module.exports = router;
