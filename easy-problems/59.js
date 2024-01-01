// 1464. Maximum Product of Two Elements in an Array
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

// const maxProduct = function (nums) {
//     const arr = [];
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             arr.push((nums[i] - 1) * (nums[j] - 1));
//         }
//     }
//     return Math.max(...arr);
// };

const maxProduct = function (nums) {
    nums.sort((a, b) => b - a);
    return (nums[0] - 1) * (nums[1] - 1);
};

console.log(maxProduct([3, 4, 5, 2])); //12
console.log(maxProduct([10, 2, 5, 2])); //36
