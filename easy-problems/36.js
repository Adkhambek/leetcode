// 2011. Final Value of Variable After Performing Operations
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

// const finalValueAfterOperations = function (operations) {
//     let total = 0;
//     for (let operation of operations) {
//         if (operation.includes("--")) {
//             total--;
//         } else {
//             total++;
//         }
//     }
//     return total;
// };

// const finalValueAfterOperations = function (operations) {
//     let total = 0;
//     for (let operation of operations)
//         operation.includes("--") ? total-- : total++;
//     return total;
// };

const finalValueAfterOperations = function (operations) {
    if (operations.length === 0) return 0;
    if (operations.pop().includes("--")) {
        return finalValueAfterOperations(operations) - 1;
    } else {
        return finalValueAfterOperations(operations) + 1;
    }
};

console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
