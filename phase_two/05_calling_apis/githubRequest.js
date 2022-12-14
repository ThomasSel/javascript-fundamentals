const { get } = require('callback-fetch');

const handleReceivedResponse = (body) => {
  const responseObject = JSON.parse(body);
  console.log('body:', responseObject);
};

const url = 'https://api.github.com/repos/sinatra/sinatra';

get(url, handleReceivedResponse);
