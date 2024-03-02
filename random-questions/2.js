/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* Bad algo */
/* var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}; */

var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(target - nums[i])) {
      map.set(nums[i], i);
    } else {
      return [map.get(target - nums[i]), i];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
/* 
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
console.log(twoSum([3, 2, 4], 6));
/* 
Output: [1,2]
*/
console.log(twoSum([3, 3], 6));
/* 
Output: [0,1]
*/

/* 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
