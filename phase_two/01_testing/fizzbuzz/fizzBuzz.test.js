fizzBuzz = require('./fizzBuzz');

describe('fizzbuzz', () => {
  it('tests for 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('tests for 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
    
  it('tests for 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
    
  it('tests for 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
    
  it('tests for 18', () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  });
    
  it('tests for 20', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });
});