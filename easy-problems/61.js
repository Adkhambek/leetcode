// 2000. Reverse Prefix of Word
// https://leetcode.com/problems/reverse-prefix-of-word/

// const reversePrefix = function (word, ch) {
//     const reverse = word
//         .substring(0, word.indexOf(ch) + 1)
//         .split("")
//         .reverse()
//         .join("");
//     const rest = word.substring(word.indexOf(ch) + 1, word.length);
//     return reverse + rest;
// };

const reversePrefix = function (word, ch) {
    let result = "";
    for (let i = word.indexOf(ch); i >= 0; i--) {
        result += word[i];
    }
    for (let i = word.indexOf(ch) + 1; i < word.length; i++) {
        result += word[i];
    }
    return result;
};

console.log(reversePrefix("abcdefd", "d"));
