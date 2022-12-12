const executeAfterDelay = (time, func) => {
  setTimeout(func, time * 1000);
};

const printHello = () => {
  console.log('Hello there!');
};

const delay = 5;
executeAfterDelay(delay, printHello);

console.log(`After ${delay} seconds, the printHello function will be called`);
