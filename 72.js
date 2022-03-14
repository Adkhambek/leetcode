// 2053. Kth Distinct String in an Array
// https://leetcode.com/problems/kth-distinct-string-in-an-array/

const kthDistinct = function (arr, k) {
    const map = {};
    for (const letter of arr) {
        if (map[letter]) map[letter]++;
        else map[letter] = 1;
    }
    const keys = Object.keys(map);
    const res = [];
    for (const key of keys) {
        if (map[key] === 1) res.push(key);
    }
    return res.length >= k ? res[k - 1] : "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["a", "b", "a"], 3));
