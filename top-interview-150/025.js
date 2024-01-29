// https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
/* 
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
console.log(isPalindrome("race a car"));
/* 
Output: false
Explanation: "raceacar" is not a palindrome.
*/
console.log(isPalindrome(" "));
/* 
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
console.log(isPalindrome("a"));
