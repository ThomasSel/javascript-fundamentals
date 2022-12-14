const Thermostat = require('./thermostat');

describe(Thermostat, () => {
  it('temperature starts at 20', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('up increases the temperature', () => {
    const thermostat = new Thermostat();

    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);

    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(23);
  });

  it('down decreases the temperature', () => {
    const thermostat = new Thermostat();

    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);

    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(17);
  });

  it('temperature cannot go below 10 degrees', () => {
    const thermostat = new Thermostat();

    for (let i = 0; i < 15; i++) {
      thermostat.down();
    }

    expect(thermostat.getTemperature()).toBe(10);
  });

  it('power saving mode is on by default -> temp cannot go above 25 degrees', () => {
    const thermostat = new Thermostat();

    for (let i = 0; i < 25; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(25);
  });

  it('power saving mode is off -> temp cannot go above 32 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    
    for (let i = 0; i < 25; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(32);
  });

  it('setPowerSavingMode can set psm back to true', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.setPowerSavingMode(true);
    
    for (let i = 0; i < 25; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(25);
  });

  it('reset sets the temperature back to 20', () => {
    const thermostat = new Thermostat();
    
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(23);

    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('has the correct energy usage', () => {
    const thermostat = new Thermostat();

    thermostat.down();
    thermostat.down();
    expect(thermostat.getCurrentEnergyUsage()).toBe('medium');

    thermostat.down();
    expect(thermostat.getCurrentEnergyUsage()).toBe('low');

    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 8; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentEnergyUsage()).toBe('medium');

    thermostat.up();
    expect(thermostat.getCurrentEnergyUsage()).toBe('high');
  });
});
