// 1748. Sum of Unique Elements
// https://leetcode.com/problems/sum-of-unique-elements/

const sumOfUnique = function (nums) {
    const obj = {};
    for (const num of nums) {
        if (num in obj) obj[num] = null;
        else obj[num] = num;
    }
    return Object.values(obj)
        .filter((val) => val)
        .reduce((a, b) => a + b, 0);
};

console.log(sumOfUnique([1, 1, 2]));
