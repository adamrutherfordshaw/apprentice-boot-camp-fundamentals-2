const { Receipt } = require("./receipt.js");

class Checkout {
  constructor() {
    this.total = 0;
    this.numberOfA = 0;
    this.numberOfB = 0;
    this.receipt = new Receipt();
  }

  scan(sku) {
    if ("A" === sku) {
      this.receipt.scanned(sku, 50, 30, 5, this.numberOfA + 1);
      this.total += 50;
      if (++this.numberOfA % 5 === 0) {
        this.total -= 30;
      }
    } else if ("B" === sku) {
      this.receipt.scanned(sku, 30, 15, 2, this.numberOfB + 1);
      this.total += 30;
      if (++this.numberOfB % 2 === 0) {
        this.total -= 15;
      }
    } else if ("C" === sku) {
      this.total += 20;
      this.receipt.scanned(sku, 20);
    } else if ("D" === sku) {
      this.total += 15;
      this.receipt.scanned(sku, 15);
    }
  }

  getTotal() {
    return this.total;
  }

  getReceipt() {
    return this.receipt.getText();
  }
}

module.exports = {
  Checkout,
};
