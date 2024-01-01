// 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/

const uniqueOccurrences = function (arr) {
    const obj = {};
    for (const num of arr) {
        if (obj[num]) obj[num]++;
        else obj[num] = 1;
    }
    return (
        [...new Set(Object.values(obj))].length === Object.values(obj).length
    );
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); //t
console.log(uniqueOccurrences([1, 2])); // f
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // t
