// https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (char in brackets) {
      stack.push(char);
    } else {
      const current = stack.pop();
      if (brackets[current] !== char) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
// Output: true
console.log(isValid("()[]{}"));
// Output: true
console.log(isValid("(]"));
// Output: false
console.log(isValid("([]{})([}])"));
