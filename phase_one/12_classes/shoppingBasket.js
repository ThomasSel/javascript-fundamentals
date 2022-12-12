class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    return this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
    0);
  }

  addItem(candy) {
    this.items.push(candy);
  }
}

module.exports = ShoppingBasket;
