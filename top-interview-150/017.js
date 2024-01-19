//https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (numbers[s[i]] < numbers[s[i + 1]]) {
      result -= numbers[s[i]];
    } else {
      result += numbers[s[i]];
    }
  }

  return result;
};

console.log(romanToInt("III"));
/* 
Output: 3
Explanation: III = 3.
*/
console.log(romanToInt("LVIII"));
/* 
Output: 58
Explanation: L = 50, V= 5, III = 3.
*/
console.log(romanToInt("MCMXCIV"));
/* 
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
