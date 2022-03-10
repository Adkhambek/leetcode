// 1323. Maximum 69
// https://leetcode.com/problems/maximum-69-number/

const maximum69Number = function (num) {
    return Number(String(num).replace("6", "9"));
};

console.log(maximum69Number(6969));
