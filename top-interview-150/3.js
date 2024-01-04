// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = null;
  for (let i = 0; i < nums.length; i++) {
    if (k !== nums[i]) {
      k = nums[i];
    } else {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums;
};

// Second way:

// var removeDuplicates = function (nums) {
//   let k = Array.from(new Set(nums));
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = k[i];
//   }

//   return k.length;
// };

console.log(removeDuplicates([1, 1, 2]));
// Output: 2, nums = [1,2,_]

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

/* 
Constraints:

    1 <= nums.length <= 3 * 104
    -100 <= nums[i] <= 100
    nums is sorted in non-decreasing order.
*/
