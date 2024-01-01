// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

// const sortedSquares = function (nums) {
//     let temp;
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] ** 2 < nums[j] ** 2) {
//                 console.log(nums[j]);
//                 temp = nums[i];
//                 nums[i] = nums[j] ** 2;
//                 nums[j] = temp ** 2;
//             }
//         }
//     }
//     return nums;
// };
// ----WRONG

const sortedSquares = function (nums) {
    return nums.map((val) => val ** 2).sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
