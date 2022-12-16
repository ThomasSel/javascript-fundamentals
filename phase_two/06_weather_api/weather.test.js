const Weather = require('./weather');

describe(Weather, () => {
  it('gets the weather in London', () => {
    const fakeWeatherClient = {
      fetchWeatherData: (city, callback) => {
        callback({
          name: city,
          coord: { lon: -0.1257, lat: 51.5085 }
        });
      }
    };

    const weather = new Weather(fakeWeatherClient);
    expect(weather.getWeatherData()).toEqual({});

    weather.fetch('London');

    expect(weather.getWeatherData()).toEqual({
      name: 'London',
      coord: { lon: -0.1257, lat: 51.5085 }
    });
  });
});