// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = function (nums) {
    const arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        arr.push(nums[i] + arr[i - 1]);
    }
    return arr;
};

console.log(runningSum([1, 2, 3, 4]));
