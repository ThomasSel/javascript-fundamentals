const isEven = number => {
  return number % 2 === 0;
};

for (let i = 1; i <= 20; i++) {
  console.log(`${i} is ${isEven(i) ? 'even' : 'odd'}`)
}
