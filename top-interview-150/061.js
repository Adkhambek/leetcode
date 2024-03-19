/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    } else {
      nums.push(target);
      nums.sort(function (a, b) {
        return a - b;
      });
      break;
    }
  }
  return nums.indexOf(target);
};

console.log(searchInsert([1, 3, 5, 6], 5));
// Output: 2
