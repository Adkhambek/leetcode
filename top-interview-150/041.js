// https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1]);
    }
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// Output: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// Output: false

/* 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*/
