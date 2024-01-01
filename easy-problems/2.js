//https://leetcode.com/problems/roman-to-integer/

//1.

// const romanToInt = (s) => {
//     let roman = s.split("");
//     result = 0;
//     const arabic = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     };
//     for (const index in roman) {
//         for (const key in arabic) {
//             if (key === roman[index]) {
//                 roman[index] = arabic[key];
//             }
//         }
//     }
//     for (let i = 0; i <= roman.length - 1; i++) {
//         if (roman[i] < roman[i + 1]) {
//             roman[i] = -Math.abs(roman[i]);
//         }
//         result += roman[i];
//     }
//     return result;
// };

// console.log(romanToInt("IX"));

//Runtime: 156 ms, faster than 57.18% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 45.8 MB, less than 28.49% of JavaScript online submissions for Roman to Integer.
