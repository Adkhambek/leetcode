// 20. Valid Parentheses
//https://leetcode.com/problems/valid-parentheses/

// function isValid(s) {
//     const left = [];
//     const legend = {
//         "(": ")",
//         "{": "}",
//         "[": "]",
//     };
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//             left.push(s[i]);
//         } else if (legend[left.pop()] !== s[i]) {
//             return false;
//         }
//         console.log(left);
//     }
//     return left.length ? 0 : 1;
// }

// console.log(isValid("{[]}"));
