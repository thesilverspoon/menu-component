const dbHelpers = require('../../db/dbHelpers');

module.exports = {
  menuType: (req, res) => {
    const query = {
      id: req.body.id,
      query: req.body.query,
    };
    dbHelpers.find(query, (err, result) => {
      const resultObj = result[0].toObject();
      res.send(resultObj[req.body.query]);
    });
  },
  filterBy: (req, res) => {
    const query = {
      id: req.body.id,
      query: req.body.query,
    };
    const tag = req.body.tags;
    dbHelpers.find(query, (err, result) => {
      const resultObj = result[0].toObject();
      const { lunch } = resultObj.menu;
      const filteredMenu = lunch.filter(item => item.tags === tag);
      res.send(filteredMenu);
    });
  },
};
