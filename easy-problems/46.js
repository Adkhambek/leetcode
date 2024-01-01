// 1221. Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'

// const balancedStringSplit = function (s) {
//     let result = 0;
//     let balance = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "R") balance -= 1;
//         else balance += 1;
//         if (balance === 0) result += 1;
//     }
//     return result;
// };

const balancedStringSplit = function (s) {
    let result = 0;
    let balance = 0;
    for (let val of s) {
        if (val === "R") balance--;
        else balance++;
        if (balance === 0) result++;
    }
    return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
