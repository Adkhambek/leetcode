// 268. Missing Number
// https://leetcode.com/problems/missing-number/

// const missingNumber = nums => {
//     let arr = [];
//     let n = nums.length
//     for(let i = 0; i <= n; i++) {
//         arr.push(i);
//     }
//     for(let num of arr) {
//         if(!nums.includes(num)) return num;
//     }
// };

// Runtime: 380 ms, faster than 6.60% of JavaScript online submissions for Missing Number.
// Memory Usage: 42.4 MB, less than 15.74% of JavaScript online submissions for Missing Number.

// 2.
// const missingNumber = nums => {
//     for(let i = 0; i <= nums.length; i++) {
//         if(!nums.includes(i)) return i;
//     }
// };

//3.
// const missingNumber = nums => {
//     let sum = nums.length;
//     for (let i = 0; i < nums.length; i++) {
//         sum += i - nums[i];
//     }
//     return sum;
// };


console.log(missingNumber([3,0,1]));