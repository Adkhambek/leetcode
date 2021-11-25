// 326. Power of Three
// https://leetcode.com/problems/power-of-three/

// const isPowerOfThree = n => {
//     if(n < 1) return false;
//     while(n % 3 === 0) {
//         n /=3
//     }
//     return n === 1
// };

//2
const isPowerOfThree = n => {
    return (n % 3 !== 0 || n < 1) ? n === 1 : isPowerOfThree(n / 3)
}

console.log(isPowerOfThree(0));