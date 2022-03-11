// 2089. Find Target Indices After Sorting Array
// https://leetcode.com/problems/find-target-indices-after-sorting-array/

const targetIndices = function (nums, target) {
    let temp;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) arr.push(i);
    }
    return arr;
};

// const targetIndices = function (nums, target) {
//     nums.sort((a, b) => a - b);
//     console.log(nums);
//     const arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) arr.push(i);
//     }
//     return arr;
// };

console.log(targetIndices([1, 2, 5, 2, 3], 2));
