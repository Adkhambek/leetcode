// 728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/

const selfDividingNumbers = function (left, right) {
    const res = [];
    let valid = true;
    for (let i = left; i <= right; i++) {
        for (const num of String(i)) {
            if (!Number(num) || i % Number(num) !== 0) {
                console.log(i);
                valid = false;
                break;
            }
        }
        if (valid) res.push(i);
    }
    return res;
};

console.log(selfDividingNumbers(1, 22));
