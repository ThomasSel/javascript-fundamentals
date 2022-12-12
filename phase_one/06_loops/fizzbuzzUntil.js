const fizzbuzz = (number) => {
  string = '';
  if (number % 3 === 0) string += 'Fizz';
  if (number % 5 === 0) string += 'Buzz';
  return string === '' ? number : string;
};

const fizzbuzzUntil = (max_number) => {
  for (let i = 1; i <= max_number; i++) {
    console.log(fizzbuzz(i));
  }
};

module.exports = fizzbuzzUntil;
