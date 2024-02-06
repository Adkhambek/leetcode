// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (const l of magazine) {
    if (map.has(l)) map.set(l, map.get(l) + 1);
    else map.set(l, 1);
  }

  for (const l of ransomNote) {
    if (map.get(l)) {
      map.set(l, map.get(l) - 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b"));
/* 
Output: false
*/
console.log(canConstruct("aa", "ab"));
/* 
Output: false
*/
console.log(canConstruct("aa", "aab"));
/* 
Output: true
*/

/* 
Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/
