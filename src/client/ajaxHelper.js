const $ = require('jquery');

const ajaxGet = (restId, menuType, tag) => {
  const temp = `/restaurants/${restId}/menu/${menuType}`;
  const URL = tag === 'none' ? temp : `${temp}/${tag}`;
  $.ajax({
    type: 'GET',
    url: URL,
    contentType: 'application/json',
    success: (data) => {
      console.log('response from server ==> ', data);
    },
    error: (err) => {
      console.log('error connecting =====> ', err);
    },
  });
};

export default ajaxGet;
