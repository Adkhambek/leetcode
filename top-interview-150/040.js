// https://leetcode.com/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number} n
 * @return {boolean}
 */
/* var isHappy = function (n) {
  if (n === 1 || n === 7) return true;

  while (n >= 9) {
    let sum = 0;
    let num = n;

    while (num > 0) {
      sum += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }

    if (sum === 1 || sum === 7) return true;
    n = sum;
  }

  return false;
}; */

var isHappy = function (n) {
  if (n <= 9) {
    if (n === 1 || n === 7) return true;
    return false;
  }

  let sum = 0;

  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }

  return isHappy(sum);
};

console.log(isHappy(19));
/* 
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
console.log(isHappy(2));
// Output: false

/* 
Constraints:

1 <= n <= 231 - 1
*/
