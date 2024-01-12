// https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxJump = 0;

  for (let i = 0; i < nums.length; i++) {
    maxJump = Math.max(nums[i] + i, maxJump);
    if (nums.length - 1 <= maxJump) return true;
    if (i === maxJump && nums[0] === 0) return false;
  }
};

console.log(canJump([2, 3, 1, 1, 4]));
/* 
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/
console.log(canJump([3, 2, 1, 0, 4]));
/* 
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/
console.log(canJump([3, 0, 8, 2, 0, 0, 1]));
