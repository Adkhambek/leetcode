// https://leetcode.com/problems/powx-n/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  return x ** n;
};

console.log(myPow(2.0, 10));
/* 
Output: 1024.00000
*/
console.log(myPow(2.1, 3));
/* 
Output: 9.26100
*/
console.log(myPow(2.0, -2));
/* 
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

/* 
Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
Either x is not zero or n > 0.
-104 <= xn <= 104
*/
