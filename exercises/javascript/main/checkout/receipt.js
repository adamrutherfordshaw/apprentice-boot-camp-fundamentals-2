class Receipt {
  constructor() {
    this.text = "";
    this.numberOfA = 0;
    this.numberOfB = 0;
    this.total = 0;
  }

  getText() {
    return this.text + "Total: " + this.total;
  }

  scanned(sku, price, discountValue, discountQuantity, actualQuantity) {
    if (discountQuantity) {
      this.text += `${sku}: ${price}`;
      if (actualQuantity % discountQuantity == 0) {
        const totalOfferPrice = price * actualQuantity - discountValue;
        this.text += ` - ${discountValue} (${discountQuantity} for ${totalOfferPrice})`;
        this.total += discountValue;
      } else {
        this.total += price;
      }
      this.text += "\n";
      // if (actualQuantity % discountQuantity === 0) {
      //   const totalOfferPrice = price * actualQuantity - discountQuantity;
      //   this.text += `${sku}: ${price} - ${discountValue} (${discountQuantity} for ${totalOfferPrice})`;
      //   this.total += discountValue;
      // } else {
      //   this.total += price;
      // }
      // this.text += "\n";
    } else {
      this.text += `${sku}: ${price}\n`;
      this.total += price;
    }
  }
}

module.exports = {
  Receipt,
};
