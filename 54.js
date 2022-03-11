// 1816. Truncate Sentence
// https://leetcode.com/problems/truncate-sentence/

// const truncateSentence = function (s, k) {
//     let result = "";
//     const arr = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === " ") s.substring());
//     }
//     return arr;
// };

// const truncateSentence = function (s, k) {
//     const arr = s.split(" ");
//     let str = "";
//     for (let i = 0; i < k; i++) {
//         str += arr[i] + " ";
//     }
//     return str.trim();
// };

const truncateSentence = function (s, k) {
    const arr = s.split(" ");
    arr.length = k;
    return arr.join(" ");
};

// const truncateSentence = function (s, k) {
//     return s.split(" ").splice(0, k).join(" ");
// };
console.log(truncateSentence("Hello how are you Contestant", 4));
