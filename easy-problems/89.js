// 1844. Replace All Digits with Characters
// https://leetcode.com/problems/replace-all-digits-with-characters/

const replaceDigits = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!Number.isNaN(Number(s[i]))) {
      const code = s[i - 1].charCodeAt();
      result += String.fromCharCode(code + Number(s[i]));
    } else {
      result += s[i];
    }
  }

  return result;
};

console.log(replaceDigits("a1b2c3d4e")); // Answer: "abbdcfdhe"
/* Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h' */
