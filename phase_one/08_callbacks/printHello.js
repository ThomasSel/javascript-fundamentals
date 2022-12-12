const printHello = () => {
  console.log('Hello there!');
};

setTimeout(printHello, 3000);

console.log('We have already asked setTimeout to call the printHello function after 3 seconds');
