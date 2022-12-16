const { get } = require('callback-fetch');
const apiKey = process.env.OPEN_WEATHER_API_KEY;
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

get(apiUrl, (body) => {
  weatherData = JSON.parse(body);
  console.log(weatherData.main.temp);
  console.log(weatherData.weather[0].main);
});

console.log('Requesting weather data');
