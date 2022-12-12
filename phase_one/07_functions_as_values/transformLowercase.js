const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

const transform = (message, transformationFunction) => {
  return transformationFunction(message);
};

console.log(transform('WHY ARE YOU SHOUTING?', lowercaseMessage));
