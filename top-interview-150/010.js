// https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let output = 0;
  let jump = 0;
  let far = 0;
  for (i = 0; i < nums.length - 1; i++) {
    jump = Math.max(jump, nums[i] + i);
    if (i === far) {
      far = jump;
      output++;
    }
  }
  return output;
};

console.log(jump([2, 3, 1, 1, 4]));
/* 
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/
console.log(jump([2, 3, 0, 1, 4]));
/* 
Output: 2
*/
console.log(jump([0]));
/* 
Output: 
*/
