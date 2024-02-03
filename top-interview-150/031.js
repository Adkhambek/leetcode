// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */
/* var lengthOfLongestSubstring = function (s) {
  let length = 0;
  let subStr = "";

  for (let i = 0; i < s.length; i++) {
    if (subStr.indexOf(s[i]) === -1) subStr += s[i];
    else {
      length = Math.max(length, subStr.length);
      i--;
      subStr = "";
    }
  }

  return length;
}; */

var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let currentSubstring = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charIndex = currentSubstring.indexOf(char);
    if (charIndex === -1) {
      currentSubstring += char;
      maxLength = Math.max(maxLength, currentSubstring.length);
    } else {
      currentSubstring = currentSubstring.slice(charIndex + 1) + char;
    }
  }

  return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
/* 
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
console.log(lengthOfLongestSubstring("bbbbb"));
/* 
Output: 1
Explanation: The answer is "b", with the length of 1.
*/
console.log(lengthOfLongestSubstring("pwwkew"));
/* 
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
console.log(lengthOfLongestSubstring(" "));
// Output: 1

/* 
Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/
