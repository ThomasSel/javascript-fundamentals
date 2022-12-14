const Candy = require('./candy');

describe(Candy,()=>{
  it('get names returns the names', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
  });
  it('get price returns the price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99)
  })
})