// 2529. Maximum Count of Positive Integer and Negative Integer
// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

const maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;

  for (const num of nums) {
    if (num > 0) pos++;
    if (num < 0) neg++;
  }

  return pos > neg ? pos : neg;
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
/* Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3. */
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
/*
Note that 0 is neither positive nor negative.
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
*/
