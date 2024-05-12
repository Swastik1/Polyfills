// Polyfill
// Array.reduce((acc,current,i,arr) => {},initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  let accumullator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumullator = accumullator
      ? callback(accumullator, this[i], i, this)
      : this[i];
  }

  return accumullator;
};

let elements = [1, 2, 3, 4, 5];
const sumElements = elements.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});
console.log(sumElements);
