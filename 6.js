// 66. Plus One
// https://leetcode.com/problems/plus-one/

// 1.

// const plusOne = (digits) => {
//     let last = digits.length - 1;
//     while (last >= 0) {
//         if (digits[last] === 9 && last !== 0) {
//             digits[last] = 0;
//         } else if (digits[last] === 9 && last === 0) {
//             digits[last] = 0;
//             digits.unshift(1);
//             return digits;
//         } else {
//             digits[last]++;
//             return digits;
//         }
//         last--;
//     }
// };
// console.log(plusOne([9, 9, 9, 9]));

// Runtime: 76 ms, faster than 59.07% of JavaScript online submissions for Plus One.
// Memory Usage: 39 MB, less than 35.31% of JavaScript online submissions for Plus One.

// const plusOne = (digits) => {
//     let last = digits.length - 1;
//     if (digits[last] !== 9) {
//         digits[last]++;
//         return digits;
//     } else {
//         while (last >= 0) {
//             if (digits[last] === 9) {
//                 if (last !== 0) digits[last] = 0;
//                 else {
//                     digits[last] = 0;
//                     digits.unshift(1);
//                     return digits;
//                 }
//             } else {
//                 digits[last]++;
//                 return digits;
//             }
//             last--;
//         }
//     }
// };
// console.log(plusOne([9, 9, 9, 9]));

// Runtime: 72 ms, faster than 79.15% of JavaScript online submissions for Plus One.
// Memory Usage: 38.9 MB, less than 53.00% of JavaScript online submissions for Plus One.
