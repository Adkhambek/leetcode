// https://leetcode.com/problems/factorial-trailing-zeroes/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let count = 0;

  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
};

console.log(trailingZeroes(3));
/* 
Output: 0
Explanation: 3! = 6, no trailing zero.
*/
console.log(trailingZeroes(5));
/* 
Output: 1
Explanation: 5! = 120, one trailing zero.
*/
console.log(trailingZeroes(0));
/* 
Output: 0
*/
