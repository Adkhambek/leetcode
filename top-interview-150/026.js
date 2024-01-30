// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) j++;
  }

  return j === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
/* 
Output: true
*/
console.log(isSubsequence("axc", "ahbgdc"));
/* 
Output: false
*/
console.log(isSubsequence("aec", "abcde"));
/* 
Output: false
*/

/* 
Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/
