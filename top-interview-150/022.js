// https://leetcode.com/problems/zigzag-conversion/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return s;

  let direction = false;
  let count = 0;

  let arr = new Array(numRows).fill("");

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    arr[count] += curr;
    if (count === 0 || count >= numRows - 1) direction = !direction;
    direction ? count++ : count--;
  }
  return arr.join("");
};

console.log(convert("PAYPALISHIRING", 3));
/* 
Output: "PAHNAPLSIIGYIR"
*/
console.log(convert("PAYPALISHIRING", 4));
/* 
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
*/
console.log(convert("A", 1));
/* 
Output: "A"
*/

/* 
1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/
