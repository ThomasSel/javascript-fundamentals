const getNumberSign = (number) => {
  if (number > 0) {
    return 'positive';
  } else if (number === 0) {
    return 'zero';
  } else {
    return 'negative';
  }
};

module.exports = getNumberSign;
