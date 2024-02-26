// https://leetcode.com/problems/plus-one/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  } else {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
        if (!digits[i - 1]) {
          digits.unshift(1);
          return digits;
        }
      }
    }
  }
};

console.log(plusOne([1, 2, 3]));
/* 
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/
console.log(plusOne([4, 3, 2, 1]));
/* 
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
*/
console.log(plusOne([9]));
/* 
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/
console.log(plusOne([3, 9, 9]));
