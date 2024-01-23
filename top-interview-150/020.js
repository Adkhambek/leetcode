// https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let output = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) output += strs[0][i];
    else break;
  }
  return output;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
/* 
Output: "fl"
*/
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
/* 
Output: ""
Explanation: There is no common prefix among the input strings.
*/
console.log(longestCommonPrefix(["ab", "a"]));
// a
console.log(longestCommonPrefix(["cir", "car"]));
// c
/* 
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/
