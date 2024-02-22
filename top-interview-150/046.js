// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === "+") stack.push(stack.pop() + stack.pop());
    else if (token === "-") stack.push(-stack.pop() + stack.pop());
    else if (token === "*") stack.push(stack.pop() * stack.pop());
    else if (token === "/") {
      const a = stack.pop();
      const b = stack.pop();

      stack.push((b / a) | 0);
    } else stack.push(+token);
  }

  return stack[0];
};

console.log(evalRPN((tokens = ["2", "1", "+", "3", "*"])));
/* 
Output: 9
Explanation: ((2 + 1) * 3) = 9
*/
console.log(evalRPN(["4", "13", "5", "/", "+"]));
/* 
Output: 6
Explanation: (4 + (13 / 5)) = 6
*/
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
/* 
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/
