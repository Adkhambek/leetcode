// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// const smallerNumbersThanCurrent = function (nums) {
//     const res = [];
//     const sortedNums = [...nums].sort((a, b) => a - b);
//     for (const num of nums) {
//         res.push(sortedNums.indexOf(num));
//     }
//     return res;
// };

// const smallerNumbersThanCurrent = function (nums) {
//     return nums.map((e) => [...nums].sort((a, b) => a - b).indexOf(e));
// };

const smallerNumbersThanCurrent = function (nums) {
    const res = [];
    const sort = [...nums];
    let temp;
    for (let i = 1; i < sort.length; i++) {
        for (let j = 0; j < i; j++) {
            if (sort[i] < sort[j]) {
                temp = sort[i];
                sort[i] = sort[j];
                sort[j] = temp;
            }
        }
    }
    for (const num of nums) {
        res.push(sort.indexOf(num));
    }
    return res;
};
console.log(smallerNumbersThanCurrent([5, 0, 10, 0, 10, 6]));
