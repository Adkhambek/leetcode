// https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let minValue = Infinity;
  let subarraySum = nums[0];

  while (start <= end && end < nums.length) {
    if (subarraySum >= target) {
      minValue = Math.min(minValue, end - start + 1);
      subarraySum -= nums[start];
      start++;
    } else {
      end++;
      subarraySum += nums[end];
    }
  }

  return minValue === Infinity ? 0 : minValue;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
/* 
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/
console.log(minSubArrayLen(4, [1, 4, 4]));
/* 
Output: 1
*/
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
/* 
Output: 0
*/
console.log(minSubArrayLen(5, [2, 1, 1, 1, 3, 2, 1, 2]));

/* 
Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
*/
