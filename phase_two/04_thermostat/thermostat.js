class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  setPowerSavingMode(bool) {
    this.powerSavingMode = bool;
  }

  getCurrentEnergyUsage() {
    if (this.temperature < 18) {
      return 'low';
    } else if (this.temperature <= 25) {
      return 'medium';
    } else {
      return 'high';
    }
  }

  up() {
    this.temperature = Math.min(this.temperature + 1, this.powerSavingMode ? 25 : 32);
  }

  down() {
    if (this.temperature > 10) this.temperature--;
  }

  reset() {
    this.temperature = 20;
  }
}

module.exports = Thermostat;
