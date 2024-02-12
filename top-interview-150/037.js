// https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (const char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) map.delete(char);
    } else {
      return false;
    }
  }

  return !map.size;
};

console.log(isAnagram("anagram", "nagaram"));
// Output: true
console.log(isAnagram("rat", "car"));
// Output: false

/* 
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
