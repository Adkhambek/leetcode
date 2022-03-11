// 1832. Check if the Sentence Is Pangram
// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

const checkIfPangram = function (sentence) {
    return new Set([...sentence]).size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
