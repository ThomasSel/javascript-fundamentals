const WeatherClient = require('./weatherClient');
const Weather = require('./weather');

describe('Weather Integration', () => {
  it('gets the weather in London', (done) => {
    const client = new WeatherClient();
    const weather = new Weather(client);

    weather.fetch('London', () => {
      expect(weather.getWeatherData()).toMatchObject({
        name: 'London',
        coord: { lon: -0.1257, lat: 51.5085 }
      });
      done();
    });
  });
});
