// 414. Third Maximum Number

// const thirdMax = (nums) => {
//     if (nums.length < 3) return Math.max(...nums);
//     let uniqueNumbers = new Set(nums);
//     if (uniqueNumbers.size < 3) return Math.max(...uniqueNumbers);
//     for (let i = 0; i <= 1; i++) {
//         uniqueNumbers.delete(Math.max(...uniqueNumbers));
//     }
//     return Math.max(...uniqueNumbers);
// };

const thirdMax = (nums) => {
    let uniqueNumbers = new Set(nums);
    if (uniqueNumbers.size < 3) return Math.max(...uniqueNumbers);
    let count = 0;
    while (count < 2) {
        uniqueNumbers.delete(Math.max(...uniqueNumbers));
        count++;
    }
    return Math.max(...uniqueNumbers);
};

console.log(thirdMax([2, 2, 2, 3, 3, 1]));
