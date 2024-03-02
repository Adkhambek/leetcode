/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const p of s) {
    if (p in parentheses) {
      stack.push(parentheses[p]);
    } else {
      const last = stack.pop();

      if (last !== p) return false;
    }
  }

  return !stack.length;
};

console.log(isValid("()[]{}"));
// true
