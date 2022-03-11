// 1684. Count the Number of Consistent Strings
// https://leetcode.com/problems/count-the-number-of-consistent-strings/

const countConsistentStrings = function (allowed, words) {
    const arr = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!allowed.includes(words[i][j]) && !arr.includes(words[i]))
                arr.push(words[i]);
        }
    }
    return words.length - arr.length;
};

console.log(
    countConsistentStrings("fstqyienx", [
        "n",
        "eeitfns",
        "eqqqsfs",
        "i",
        "feniqis",
        "lhoa",
        "yqyitei",
        "sqtn",
        "kug",
        "z",
        "neqqis",
    ])
);
