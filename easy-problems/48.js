// 1528. Shuffle String
// https://leetcode.com/problems/shuffle-string/

var restoreString = function (s, indices) {
    const map = new Map();
    let result = "";
    for (let i = 0; i < s.length; i++) {
        map.set(indices[i], s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        result += map.get(i);
    }
    return result;
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
