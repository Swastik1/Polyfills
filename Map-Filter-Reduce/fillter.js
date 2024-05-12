// Polyfill
// Array.filter((value, i, arr) =>  {})

Array.prototype.myFilter = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

let stack = [1, 2, 3, 4, 0, 0, 0];
const zeroItem = stack.myFilter((val) => val === 0);
console.log("zero items", zeroItem);
