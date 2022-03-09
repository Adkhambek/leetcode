// 1859. Sorting the Sentence
// https://leetcode.com/problems/sorting-the-sentence/

const sortSentence = function (s) {
    const words = s.split(" ");
    const map = new Map();
    let result = "";
    for (const word of words) {
        const num = word[word.length - 1];
        const wor = word.substring(0, word.length - 1);
        map.set(Number(num), wor);
    }
    for (let i = 1; i <= words.length; i++) {
        result += map.get(i) + " ";
    }
    return result.trim();
};

console.log(sortSentence("is2 sentence4 This1 a3"));
