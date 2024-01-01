// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

// 1.
// const moveZeroes = nums => {
//     let totalZero = 0;
//     for (let i = 0; i < nums.length; i++) {
//        if(nums[i] === 0) {
//            totalZero++;
//            nums.splice(i, 1);
//            i--;
//        }
//     }
//     while(totalZero !== 0) {
//         nums.push(0);
//         totalZero--;
//     }
//     return nums
// };

// 2.
const moveZeroes = nums => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
       if(nums[i] !== 0) {
           nums[index] = nums[i];
           if(index !== i) nums[i] = 0;
           index++;
       }
    }
    return nums
};

console.log(moveZeroes([0,1,0,2,1]));

/*
[0,0,1]

[1,]
for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] !== 0) {

        }
    }
    return nums

*/