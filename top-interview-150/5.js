// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
// 1 solution:
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  const m = nums.length / 2;
  const frq = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in frq) {
      if (frq[nums[i]] > m - 1) return nums[i];
      else frq[nums[i]]++;
    } else {
      frq[nums[i]] = 1;
    }
  }
}; */

// 2 solution:

var majorityElement = function (nums) {
  let counter = 1;
  let candidate = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) counter++;
    else {
      counter--;
      if (counter === 0) {
        counter = 1;
        candidate = nums[i];
      }
    }
  }

  return candidate;
};

console.log(majorityElement([3, 2, 3]));
// Output: 3

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// Output: 2
