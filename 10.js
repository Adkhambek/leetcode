// 136. Single Number
// https://leetcode.com/problems/single-number/

const singleNumber = nums => {
    let obj = {};
    for (let num of nums) {
        obj[num] = 0
    }
    for(let num of nums) {
        if(num in obj) {
            obj[num]++
        }
    }
    for(let keys of Object.keys(obj)) {
        if(obj[keys] === 1) {
            return keys * 1
        }
    }
};

console.log(singleNumber([4,1,2,1,2]));