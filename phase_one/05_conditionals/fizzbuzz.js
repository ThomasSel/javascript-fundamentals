const fizzBuzz = (number) => {
  string = '';
  if (number % 3 === 0) string += 'Fizz';
  if (number % 5 === 0) string += 'Buzz';
  return string === '' ? number : string;
};

module.exports = fizzBuzz;
