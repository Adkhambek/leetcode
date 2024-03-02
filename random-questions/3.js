// https://leetcode.com/problems/reformat-phone-number/description/
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  str = number.replaceAll("-", "").replaceAll(" ", "");
  const arr = [];
  let group = "";
  let l = str.length;

  for (let i = 0; i < str.length; i++) {
    if (l > 4) {
      group += str[i];

      if (group.length === 3) {
        arr.push(group);
        group = "";
        l -= 3;
      }
    } else if (l === 4) {
      group += str[i];

      if (group.length === 2) {
        arr.push(group);
        group = "";
        l -= 2;
      }
    } else if (l === 3) {
      group += str[i];

      if (group.length === 3) {
        arr.push(group);
        break;
      }
    } else if (l === 2) {
      group += str[i];

      if (group.length === 2) {
        arr.push(group);
        break;
      }
    }
  }

  return arr.join("-");
};

console.log(reformatNumber("1-23-45 6"));
/* 
Output: "123-456"
Explanation: The digits are "123456".
Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is "456".
Joining the blocks gives "123-456".
*/
console.log(reformatNumber("123 4-567"));
/* 
Output: "123-45-67"
Explanation: The digits are "1234567".
Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
Step 2: There are 4 digits left, so split them into two blocks of length 2. The blocks are "45" and "67".
Joining the blocks gives "123-45-67".
*/
console.log(reformatNumber("123 4-5678"));
/* 
Output: "123-456-78"
Explanation: The digits are "12345678".
Step 1: The 1st block is "123".
Step 2: The 2nd block is "456".
Step 3: There are 2 digits left, so put them in a single block of length 2. The 3rd block is "78".
Joining the blocks gives "123-456-78".
*/

/* 
Constraints:

2 <= number.length <= 100
number consists of digits and the characters '-' and ' '.
There are at least two digits in number.
*/
