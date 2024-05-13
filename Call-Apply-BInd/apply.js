Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "This is not callable!");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
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

purchaseCar.myApply(car1, ["Rs", "5000000"]);
