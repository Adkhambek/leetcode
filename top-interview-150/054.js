// https://leetcode.com/problems/single-number/submissions/1191837356/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let n = 0;
  for (const num of nums) n ^= num;

  return n;
};

// console.log(singleNumber([2, 2, 1]));
/* 
Output: 1
*/
console.log(singleNumber([4, 1, 2, 1, 2]));
/* 
Output: 4
*/
// console.log(singleNumber([1]));
/* 
Output: 1
*/
