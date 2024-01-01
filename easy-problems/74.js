// 2124. Check if All A's Appears Before All B's
// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/

const checkString = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "b" && s[i + 1] === "a") return false;
    }
    return true;
};

console.log(checkString("aaabbb")); // t
console.log(checkString("abab")); // f
console.log(checkString("bbb")); // t
