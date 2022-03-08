// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

// const numIdenticalPairs = function (nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

const numIdenticalPairs = function (nums) {
    let count = 0;
    const map = {};
    for (let num of nums) {
        if (num in map) {
            count += map[num];
            map[num]++;
        } else {
            map[num] = 1;
        }
    }
    return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
