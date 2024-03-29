// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};

console.log(removeElement([3, 2, 2, 3], 3));
// Output: 2, nums = [2,2,_,_]

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// Output: 5, nums = [0,1,4,0,3,_,_,_]
