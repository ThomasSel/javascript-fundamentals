class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => { return user.getName() });
  }

  getIntroductions() {
    return this.users.map((user) => { return user.getIntroduction() });
  }
}

module.exports = UserBase;

// const User = require('./user');

// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];

// const userBase = new UserBase(users);

// console.log(userBase.count());
// console.log(userBase.getNames());
// console.log(userBase.getIntroductions());
