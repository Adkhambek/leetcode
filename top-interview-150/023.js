/* 
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0, j = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      j++;
      if (j === needle.length) return i - j + 1;
    } else {
      i -= j;
      j = 0;
    }
  }

  return -1;
};

console.log(strStr("sasbutsad", "sad"));
/* 
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/
console.log(strStr("leetcode", "leeto"));
/* 
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/
console.log(strStr("mississippi", "issip"));
// 4
