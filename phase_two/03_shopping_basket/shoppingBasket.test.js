const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./candy');

describe(ShoppingBasket,() => {
  it('add item to the basket',() => {
    const basket = new ShoppingBasket();
    const candy = new Candy('Mars', 4.99);
    basket.addItem(candy)
    expect(basket.getTotalPrice()).toBe(4.99)
  });
  it('add two item to the basket',() => {
    const basket = new ShoppingBasket();
    const candy = new Candy('Mars', 4.99);
    const newCandy = new Candy('Skittle', 3.99)
    basket.addItem(candy)
    basket.addItem(newCandy)
    expect(basket.getTotalPrice()).toBe(8.98)
  });
  it('before adding item, totla price 0',() => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  })
  it('mock candy class', () => {
    const basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 2.99 };
    basket.addItem(candyDouble)
    expect(basket.getTotalPrice()).toBe(2.99)
  })
})