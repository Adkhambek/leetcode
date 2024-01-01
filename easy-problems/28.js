// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

// 1.

// const fizzBuzz = n => {
//     let count = 1;
//     let arr = [];
//     while (count <= n) {
//         if(count % 3 === 0 && count % 5 === 0) {
//             arr.push("FizzBuzz");
//         }
//         else if(count % 3 === 0) {
//             arr.push("Fizz");
//         }
//         else if(count % 5 === 0) {
//             arr.push("Buzz");
//         } else {
//             arr.push(String(count))
//         }
//         count++;
//     }
//     return arr;
// };

// 2.

// const fizzBuzz = n => {
//     let count = 1;
//     let arr = [];
//     while (count <= n) {
//         if(count % 15 === 0) arr.push("FizzBuzz");
//         else if(count % 3 === 0) arr.push("Fizz");
//         else if(count % 5 === 0) arr.push("Buzz");
//         else arr.push(String(count))
//         count++;
//     }
//     return arr;
// }

// console.log(fizzBuzz(20));
