// 1051. Height Checker
// https://leetcode.com/problems/height-checker/

// const heightChecker = function (heights) {
//     const sort = [...heights];
//     let temp;
//     for (let i = 1; i < sort.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (sort[i] < sort[j]) {
//                 temp = sort[i];
//                 sort[i] = sort[j];
//                 sort[j] = temp;
//             }
//         }
//     }
//     let count = 0;
//     for (let i = 0; i < sort.length; i++) {
//         if (sort[i] !== heights[i]) count++;
//     }
//     return count;
// };

const heightChecker = function (heights) {
    const sort = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < sort.length; i++) {
        if (sort[i] !== heights[i]) count++;
    }
    return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
console.log(heightChecker([5, 1, 2, 3, 4])); // 5
console.log(heightChecker([1, 2, 3, 4, 5])); //0
