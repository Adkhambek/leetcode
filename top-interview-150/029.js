// https://leetcode.com/problems/3sum/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let threesum = nums[i] + nums[left] + nums[right];
      if (threesum > 0) {
        right--;
      } else if (threesum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] == nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
/* 
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/
console.log(threeSum([0, 1, 1]));
/* 
Output: []
Explanation: The only possible triplet does not sum up to 0.
*/
console.log(threeSum([0, 0, 0]));
/* 
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/* 
Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
