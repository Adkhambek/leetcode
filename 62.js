// 2185. Counting Words With a Given Prefix
// https://leetcode.com/problems/counting-words-with-a-given-prefix/

// const prefixCount = function (words, pref) {
//     let count = 0;
//     for (const word of words) {
//         if (word.indexOf(pref) === 0) count++;
//     }
//     return count;
// };

// const prefixCount = function (words, pref) {
//     return words.filter((val) => val.indexOf(pref) === 0).length;
// };

// const prefixCount = function (words, pref) {
//     return words.filter((val) => val.startsWith(pref)).length;
// };

const prefixCount = function (words, pref) {
    let count = 0;
    for (const word of words) {
        if (word.startsWith(pref)) count++;
    }
    return count;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at")); //2
