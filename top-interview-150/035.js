// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapS = {};
  const mapT = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] in mapS) {
      if (mapS[s[i]] !== t[i]) return false;
    } else {
      mapS[s[i]] = t[i];
    }

    if (t[i] in mapT) {
      if (mapT[t[i]] !== s[i]) return false;
    } else {
      mapT[t[i]] = s[i];
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
// Output: true
console.log(isIsomorphic("foo", "bar"));
// Output: false
console.log(isIsomorphic("paper", "title"));
// Output: true
console.log(isIsomorphic("badc", "baba"));
// Output: false
/* 
Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/
