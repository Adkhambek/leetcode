// 1979. Find Greatest Common Divisor of Array
// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

const findGCD = function (nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    if (min === max) return min;
    const arr = [];
    for (let i = 1; i < max; i++) {
        if (min % i === 0 && max % i === 0) arr.push(i);
    }
    return arr[arr.length - 1];
};

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([7, 5, 6, 8, 3]));
console.log(findGCD([3, 3]));
console.log(findGCD([6, 7, 9]));
console.log(findGCD([1, 1]));
