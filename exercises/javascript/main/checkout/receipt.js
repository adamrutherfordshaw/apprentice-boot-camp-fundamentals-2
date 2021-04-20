class Receipt {
  constructor() {
    this.text = "";
    this.total = 0;
  }

  scanned(sku, price, discountValue, discountQuantity, actualQuantity) {
    this.text += `${sku}: ${price}`;
    if (discountQuantity && actualQuantity % discountQuantity === 0) {
      const totalOfferPrice = price * actualQuantity - discountValue;
      this.text += ` - ${discountValue} (${discountQuantity} for ${totalOfferPrice})`;
      this.total += discountValue;
    } else {
      this.total += price;
    }
    this.text += "\n";
  }

  getText() {
    return this.text + "Total: " + this.total;
  }
}
module.exports = {
  Receipt,
};
