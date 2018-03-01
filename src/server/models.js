const dbHelpers = require('../../db/dbHelpers');

module.exports = {
  menuType: (req, res) => {
    const reqArr = req.url.split('/').slice(1);
    const request = reqArr.join('.');
    const queryObj = {
      query: request,
    };
    dbHelpers.find(queryObj, (err, result) => {
      const resultObj = result[0].toObject();
      res.send(resultObj[reqArr[0]][reqArr[1]]);
    });
  },
  filterBy: (req, res) => {
    const reqArr = req.url.split('/').slice(1, 3);
    const request = reqArr.join('.');
    const tag = req.url.split('/').slice(3).toString();
    const queryObj = {
      query: request,
    };
    dbHelpers.find(queryObj, (err, result) => {
      const resultObj = result[0].toObject();
      const menu = resultObj.menu[reqArr[1]];
      const filteredMenu = menu.filter(item => item.tags === tag);
      // res.send(tag);
      res.send(filteredMenu);
    });
  },
};
