const generateMessages = (people) => {
  return people.map((person) => {
    return `Hi ${person.name}! ${person.discount}% off our best candies for you today!`;
  });
};
// An array of objects!
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];
console.log(generateMessages(namesAndDiscounts));
