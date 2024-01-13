// https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150

var RandomizedSet = function () {
  this.arr = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */

RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }
  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }
  const indexToRemove = this.map.get(val);
  this.map.set(this.arr[this.arr.length - 1], indexToRemove);
  this.map.delete(val);
  this.arr[indexToRemove] = this.arr[this.arr.length - 1];
  this.arr[this.arr.length - 1] = val;
  this.arr.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
