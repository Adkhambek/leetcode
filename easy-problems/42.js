// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

// const numJewelsInStones = function (jewels, stones) {
//     const map = {};
//     let total = 0;
//     for (const letter of jewels) {
//         map[letter] = 0;
//     }
//     for (const letter of stones) {
//         if (letter in map) map[letter]++;
//     }
//     for (const num of Object.values(map)) {
//         total += num;
//     }
//     return total;
// };

const numJewelsInStones = function (jewels, stones) {
    const map = new Map();
    let total = 0;
    for (const letter of jewels) {
        map.set(letter, 0);
    }
    for (const letter of stones) {
        if (map.has(letter)) map.set(letter, map.get(letter) + 1);
    }
    for (const num of map.values()) {
        total += num;
    }
    return total;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
