// 231. Power of Two
// https://leetcode.com/problems/power-of-two/

const isPowerOfTwo = n => {
    if(n === 0) return false;
    while(n !== 1) {
        if(n % 2 === 0) n /= 2
        else return false;
    }
    return true
};

console.log(isPowerOfTwo(9));