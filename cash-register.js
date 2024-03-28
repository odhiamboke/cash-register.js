class CashRegister {
  constructor() {
    this.items = [
      { name: 'Phone', price: 300 },
      { name: 'Smart TV', price: 220 },
      { name: 'Gaming Console', price: 150 }
    ];
    this.cart = [];
  }

  addItem(itemName) {
    const item = this.items.find(item => item.name === itemName);
    if (item) {
      this.cart.push(item);
      console.log(`${itemName} added to the shopping cart.`);
    } else {
      console.log(`Sorry, we don't sell ${itemName}.`);
    }
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this.cart) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  pay(paymentAmount) {
    let totalPrice = this.calculateTotalPrice();
    if (totalPrice > 400) {
      const discount = totalPrice * 0.1;
      console.log(`Applying a 10% discount of $${discount.toFixed(2)}...`);
      totalPrice -= discount;
    }
    console.log(`Total price: $${totalPrice.toFixed(2)}`);
    if (paymentAmount >= totalPrice) {
      const change = paymentAmount - totalPrice;
      console.log(`Thank you for your purchase! Your change is $${change.toFixed(2)}`);
    } else {
      console.log(`Insufficient funds. Please pay at least $${totalPrice.toFixed(2)}`);
    }
  }
}

const cashRegister = new CashRegister();
cashRegister.addItem('Phone');
cashRegister.addItem('Smart TV');

cashRegister.pay(400);
cashRegister.pay(500);
cashRegister.pay(300);
