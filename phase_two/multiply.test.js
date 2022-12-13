describe('multiply', () => {
  multiply = require('./multiply');

  it('multiplies 2 and 2', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  it('multiplies -1 and 5', () => {
    expect(multiply(-1, 5)).toBe(-5);
  });
});