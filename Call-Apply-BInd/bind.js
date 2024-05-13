Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as its not callable!");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
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

const newFunc = purchaseCar.myBind(car1);
console.log(newFunc("Rs", "5000000"));
