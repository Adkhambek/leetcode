// 2119. A Number After a Double Reversal
// https://leetcode.com/problems/a-number-after-a-double-reversal/

const isSameAfterReversals = function (num) {
    return num % 10 === 0 && num !== 0 ? false : true;
};

console.log(isSameAfterReversals(1800));
