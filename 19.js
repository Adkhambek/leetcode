// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/

const wordPattern = (pattern, s) => {
    const words = s.split(/\s+/);
    console.log(words);  
};

console.log(wordPattern("abba", "dog cat cat dog"));