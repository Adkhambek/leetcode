// https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// 1.
// const isPalindrome = (x) => {
//     if (x < 0) return false;
//     if (x === 0) return true;
//     let arr = [];
//     while (x >= 1) {
//         arr.push(x % 10);
//         x = Math.floor(x / 10);
//     }
//     let start = 0;
//     let end = arr.length - 1;
//     console.log(arr);
//     while (start <= end) {
//         if (arr[start] === arr[end]) {
//             start += 1;
//             end -= 1;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isPalindrome(1000021));

// Runtime: 372 ms, faster than 13.10% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 53.9 MB, less than 5.18% of JavaScript online submissions for Palindrome Number.

// 2.
// const isPalindrome = (x) => {
//     if (x < 0) return false;
//     x = x.toString();
//     let reverseX = x.split("").reverse().join("");
//     console.log(x, reverseX);
//     return x === reverseX ? true : false;
// };
// console.log(isPalindrome(121));

// Runtime: 260 ms, faster than 38.42% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 53.9 MB, less than 5.18% of JavaScript online submissions for Palindrome Number.

// 3.
// const isPalindrome = (x) => {
//     if (x < 0) return false;
//     let lengthX = Math.ceil(Math.log10(x));
//     let reverseX = 0;
//     for (let i = 1; i <= lengthX; i++) {
//         reverseX = reverseX + (x % 10) * 10 ** (lengthX - 1);
//         x = Math.floor(x / 10);
//         console.log(reverseX);
//     }
// };

// console.log(isPalindrome(123));
