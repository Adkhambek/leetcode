// https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  return Object.entries(map).reduce((result, [letter, n]) => {
    result += letter.repeat(Math.floor(num / n));
    num %= n;
    return result;
  }, "");
};

console.log(intToRoman(30));
/* 
Output: "III"
Explanation: 3 is represented as 3 ones.
*/
console.log(intToRoman(58));
/* 
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
*/
console.log(intToRoman(1994));
/* 
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
