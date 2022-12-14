const { get } = require('callback-fetch');

const fetchJson = (url, callback) => {
  return get(url, (body) => {
    const responseObject = JSON.parse(body);
    return callback(responseObject);
  });
};

module.exports = fetchJson;
