// 2154. Keep Multiplying Found Values by Two
// https://leetcode.com/problems/keep-multiplying-found-values-by-two/

// const findFinalValue = function (nums, original) {
//     while (nums.includes(original)) {
//         original *= 2;
//     }
//     return original;
// };

const findFinalValue = function (nums, original) {
    if (!nums.includes(original)) return original;
    return findFinalValue(nums, (original *= 2));
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
console.log(findFinalValue([2, 7, 9], 4));
console.log(findFinalValue([8, 19, 4, 2, 15, 3], 2));
