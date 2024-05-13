Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "This is not callable");
  }

  context.fn = this;
  context.fn(...args);
};

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I bought ${this.color} - ${this.company} for ${currency}${price}`
  );
}

purchaseCar.myCall(car1, "Rs", "5000000");
