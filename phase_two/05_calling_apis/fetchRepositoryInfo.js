const { get } = require('callback-fetch');

const fetchRepositoryInfo = (url_suffix, callback) => {
  return get('https://api.github.com/repos/' + url_suffix, (body) => {
    const bodyObject = JSON.parse(body);
    return callback(bodyObject);
  });
};

module.exports = fetchRepositoryInfo;
