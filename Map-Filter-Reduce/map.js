// Polyfill
// Array.map((num, i, arr) => {})

Array.prototype.myMap = function (callback) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }

  return temp;
};

const nums = [1, 2, 3, 4, 5];
const multiplybytwo = nums.myMap((num) => num * 2);
console.log(multiplybytwo);
