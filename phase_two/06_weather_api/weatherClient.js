const { get } = require('callback-fetch');

class WeatherClient {
  fetchWeatherData(city, callback) {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const apiUrl = 
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    get(apiUrl, (body) => {
      const weatherData = JSON.parse(body);
      callback(weatherData);
    });
  }
}

module.exports = WeatherClient;
