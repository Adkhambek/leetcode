// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let j = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[j - 2]) {
      nums[j++] = nums[i];
    }
  }

  return j;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
// Output: 5, nums = [1,1,2,2,3,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// if (nums[i] === nums[i + 1]) {
//     nums.splice(i, 1);
//     i--;
//     n++;
//   } else {
//     n = 0;
//   }
