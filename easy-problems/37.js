// 2114. Maximum Number of Words Found in Sentences
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

// const mostWordsFound = function (sentences) {
//     return Math.max(...sentences.map((e) => e.split(" ").length));
// };

// Runtime: 65 ms, faster than 92.04% of JavaScript online submissions for Maximum Number of Words Found in Sentences.

const mostWordsFound = function (sentences) {
    let maxnum = 0;
    for (const sentence of sentences) {
        if (maxnum < sentence.split(" ").length)
            maxnum = sentence.split(" ").length;
        else continue;
    }
    return maxnum;
};

// Runtime: 64 ms, faster than 96.00% of JavaScript online submissions for Maximum Number of Words Found in Sentences.

console.log(
    mostWordsFound([
        "alice and bob love leetcode",
        "i think so too",
        "this is great thanks very much",
    ])
);
