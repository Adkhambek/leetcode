// https://leetcode.com/problems/palindrome-number/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let num = x;
  let rNum = 0;

  while (num !== 0) {
    const r = num % 10;
    rNum = rNum * 10 + r;
    num = (num - r) / 10;
  }

  return rNum === x;
};

console.log(isPalindrome(121));
/* 
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/
console.log(isPalindrome(-121));
/* 
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/
console.log(isPalindrome(1010));
/* 
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/* Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string? */
