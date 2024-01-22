// https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const str = s.trim();
  let i = str.length - 1;
  let count = 0;
  while (i--) {
    count++;
    if (str[i] === " ") return count;
  }

  return ++count;
};

console.log(lengthOfLastWord("Hello World"));
/* 
Output: 5
Explanation: The last word is "World" with length 5.
*/
console.log(lengthOfLastWord((s = "   fly me   to   the moon  ")));
/* 
Output: 4
Explanation: The last word is "moon" with length 4.
*/
console.log(lengthOfLastWord("luffy is still joyboy"));
/* 
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/
console.log(lengthOfLastWord("    day"));
/* 
Output: 1
*/
