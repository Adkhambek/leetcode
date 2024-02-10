// https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = {};
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] in map) {
      if (map[pattern[i]] !== words[i]) return false;
    } else {
      if (Object.values(map).includes(words[i])) return false;
      map[pattern[i]] = words[i];
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
// Output: true
console.log(wordPattern("abba", "dog cat cat fish"));
// Output: false
console.log(wordPattern("aaaa", "dog cat cat dog"));
// Output: false
console.log(wordPattern("abba", "dog dog dog dog"));
// Output: false
/* 
Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/
