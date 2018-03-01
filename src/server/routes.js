const models = require('./models');
const router = require('express').Router();

router.get('/menu/lunch', models.menuType);

router.get('/menu/dinner', models.menuType);

router.get('/menu/dessert', models.menuType);

router.get('/menu/lunch/gluten-free', models.filterBy);
router.get('/menu/dinner/gluten-free', models.filterBy);
router.get('/menu/dessert/gluten-free', models.filterBy);

router.get('/menu/lunch/vegan', models.filterBy);
router.get('/menu/dinner/vegan', models.filterBy);
router.get('/menu/dessert/vegan', models.filterBy);

router.get('/menu/lunch/vegetarian', models.filterBy);
router.get('/menu/dinner/vegetarian', models.filterBy);
router.get('/menu/dessert/vegetarian', models.filterBy);

module.exports = router;
