// 1299. Replace Elements with Greatest Element on Right Side
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

const replaceElements = function (arr) {
    const res = [];
    for (let i = 1; i < arr.length; i++) {
        res.push(Math.max(...arr.slice(i, arr.length)));
    }
    res.push(-1);
    return res;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [-1]
