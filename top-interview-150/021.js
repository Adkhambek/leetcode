// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //   return s
  //     .split(" ")
  //     .filter((val) => val)
  //     .reverse()
  //     .join(" ");

  const words = [];
  let word = "";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") word += s[i];
    if ((s[i + 1] === " " || i === s.length - 1) && word !== "") {
      words.push(word);
      word = "";
    }
  }

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) {
      result += " ";
    }
  }

  return result;
};

console.log(reverseWords("the sky is blue"));
/* 
Output: "blue is sky the"
*/
console.log(reverseWords("  hello world  "));
/* 
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
*/
console.log(reverseWords("a good   example"));
/* 
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/
