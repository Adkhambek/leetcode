// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// const findDisappearedNumbers = (nums) => {
//     let map = [];
//     let count = 1;
//     while (count <= nums.length) {
//         map.push(count);
//         count++;
//     }
//     for (let num of nums) {
//         let index = map.indexOf(num);
//         if (index !== -1) {
//             map.splice(index, 1);
//         }
//     }
//     return map;
// };

const findDisappearedNumbers = (nums) => {
    let map = {};
    let count = 1;
    while (count <= nums.length) {
        map[count] = count;
        count++;
    }
    for (let num of nums) {
        if (num in map) {
            delete map[num];
        }
    }
    return Object.values(map);
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
