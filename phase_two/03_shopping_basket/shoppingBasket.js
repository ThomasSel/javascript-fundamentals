class ShoppingBasket{
  constructor(){
    this.basket = []
  };
  addItem(candy){
    this.basket.push(candy)
  };
  getTotalPrice(){
    let sum = 0;
    for( let i=0; i < this.basket.length; i++ ){
      const candy = this.basket[i]
      sum += candy.getPrice()
    };
    return sum;
  }
}

module.exports = ShoppingBasket