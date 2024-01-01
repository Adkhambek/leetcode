// 2006. Count Number of Pairs With Absolute Difference K
// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

const countKDifference = function (nums, k) {
    const obj = {};
    for (const num of nums) {
        if (num in obj) obj[num]++;
        else obj[num] = 1;
    }
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i] - k]) total += obj[nums[i] - k];
    }
    return total;
};

console.log(countKDifference([1, 2, 2, 1], 1));
