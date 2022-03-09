// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// const subtractProductAndSum = function (n) {
//     let total = 0;
//     let product = 1;
//     while (n !== 0) {
//         const mod = n % 10;
//         total += mod;
//         product *= mod;
//         n = Math.floor(n / 10);
//     }
//     return product - total;
// };

const subtractProductAndSum = function (n) {
    const arr = String(n)
        .split("")
        .map((e) => Number(e));
    const total = arr.reduce((a, b) => a + b);
    const product = arr.reduce((a, b) => a * b);
    return product - total;
};

console.log(subtractProductAndSum(234));
