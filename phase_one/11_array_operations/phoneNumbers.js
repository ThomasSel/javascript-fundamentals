const checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10;
};

const filterLongNumbers = (phoneNumberArray) => {
  return phoneNumberArray.filter(checkLength);
};

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

console.log(filterLongNumbers(numbers));
// [ '1763687364', '4763687363', '7867867862' ]

console.log(filterLongNumbers(['4763687363', '7867867862'])); // no number to filter out
// [ '4763687363', '7867867862' ]

console.log(filterLongNumbers([]));
// []