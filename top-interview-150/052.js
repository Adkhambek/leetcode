// https://leetcode.com/problems/sqrtx/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let first = 0;
  let last = x / 2;

  while (first <= last) {
    const mid = Math.floor((first + last) / 2);

    if ((mid * mid <= x) & (x < (mid + 1) * (mid + 1))) {
      return mid;
    } else if (mid * mid > x) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return -1;
};

console.log(mySqrt(4));
/* 
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
*/
console.log(mySqrt(8));
/* 
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/
