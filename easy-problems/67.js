// 1941. Check if All Characters Have Equal Number of Occurrences
// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

const areOccurrencesEqual = function (s) {
    const obj = {};
    for (const l of s) {
        if (l in obj) obj[l]++;
        else obj[l] = 1;
    }
    const values = Object.values(obj);
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== obj[s[0]]) return false;
    }
    return true;
};

console.log(areOccurrencesEqual("abacbc"));
