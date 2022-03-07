// 415. Add Strings
// https://leetcode.com/problems/add-strings/

// const addStrings = (num1, num2) => {
//     let pw1 = num1.length;
//     let pw2 = num2.length;
//     const res = "";
//     const nums1 = [];
//     const nums2 = [];
//     while (pw1--) {
//         nums1.push(Math.floor(num1 / 10 ** pw1) * 10 ** pw1);
//         num1 = num1 % 10 ** pw1;
//     }
//     while (pw2--) {
//         nums2.push(Math.floor(num2 / 10 ** pw2) * 10 ** pw2);
//         num2 = num2 % 10 ** pw2;
//     }

// };

// const addStrings = (num1, num2) => {
//     const arr1 = num1.split("").map((e) => Number(e));
//     const arr2 = num2.split("").map((e) => Number(e));
//     if (arr1.length > arr2.length) {
//         for (let i = arr2.length - 1; i >= 0; i--) {
//             arr1[i] = arr1[i] + arr2[i];
//         }
//     }
//     return arr1;
// };

// console.log(addStrings("1203", "102"));
