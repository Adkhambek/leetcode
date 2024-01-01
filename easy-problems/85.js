// 1967. Number of Strings That Appear as Substrings in Word
// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

const numOfStrings = function (patterns, word) {
  let count = 0;
  for (const patter of patterns) {
    if (word.indexOf(patter) !== -1) count++;
  }
  return count;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
// Answer: 3
/*
Explanation:
- "a" appears as a substring in "abc".
- "abc" appears as a substring in "abc".
- "bc" appears as a substring in "abc".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word.
*/
