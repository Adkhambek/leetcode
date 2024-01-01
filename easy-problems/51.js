// 2176. Count Equal and Divisible Pairs in an Array
// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

const countPairs = function (nums, k) {
    let total = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j] && (i * j) % k === 0) total++;
        }
    }
    return total;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
