// 342. Power of Four
// https://leetcode.com/problems/power-of-four/

const isPowerOfFour = n => {
    return (n % 4 !== 0 || n < 1) ? n === 1 : isPowerOfFour(n/4)
};

console.log(isPowerOfFour(16));
