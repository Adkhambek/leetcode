// https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j];
      if (firstNum + secondNum === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0,1]
console.log(twoSum([3, 2, 4], 6));
// Output: [1,2]
console.log(twoSum([3, 3], 6));
// Output: [0,1]

/* 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
