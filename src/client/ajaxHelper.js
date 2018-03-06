const $ = require('jquery');

const ajaxGet = (restId, menuType, tag, cb) => {
  const temp = `http://localhost:3005/restaurants/${restId}/menu/${menuType}`;
  const URL = tag === 'none' ? temp : `${temp}/${tag}`;
  $.ajax({
    type: 'GET',
    url: URL,
    contentType: 'application/json',
    success: (result) => {
      cb(result);
    },
  });
};

export default ajaxGet;

