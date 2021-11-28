// 367. Valid Perfect Square
// https://leetcode.com/problems/valid-perfect-square/

const isPerfectSquare = num => {
    let count = 1;
    while(num > 0) {
        num -= count;
        count +=2
    }

    return num === 0
};

console.log(isPerfectSquare(16));