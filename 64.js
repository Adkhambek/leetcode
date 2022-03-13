// 1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

const findNumbers = function (nums) {
    let count = 0;
    for (const num of nums) {
        if (String(num).length % 2 === 0) count++;
    }
    return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
