class Weather {
  constructor(client) {
    this.client = client;
    this.weatherData = {};
  }

  fetch(city, callback = () => {}) {
    this.client.fetchWeatherData(city, (weatherData) => {
      this.weatherData = weatherData;
      callback();
    });
  }

  getWeatherData() {
    return this.weatherData;
  }
}

module.exports = Weather;
