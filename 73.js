// 2032. Two Out of Three
// https://leetcode.com/problems/two-out-of-three/

// const twoOutOfThree = function (nums1, nums2, nums3) {
//     const res = [];
//     for (const num of nums1) {
//         if (nums2.includes(num) && !res.includes(num)) res.push(num);
//     }
//     for (const num of nums1) {
//         if (nums3.includes(num) && !res.includes(num)) res.push(num);
//     }
//     for (const num of nums2) {
//         if (nums3.includes(num) && !res.includes(num)) res.push(num);
//     }
//     return res;
// };

const twoOutOfThree = function (nums1, nums2, nums3) {
    const set = new Set();
    for (const num of nums1) {
        if (nums2.includes(num)) set.add(num);
    }
    for (const num of nums1) {
        if (nums3.includes(num)) set.add(num);
    }
    for (const num of nums2) {
        if (nums3.includes(num)) set.add(num);
    }
    return [...set];
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
console.log(
    twoOutOfThree(
        [2, 15, 10, 11, 14, 12, 14, 11, 9, 1],
        [8, 9, 13, 2, 11, 8],
        [13, 5, 15, 7, 12, 7, 8, 3, 13, 15]
    )
);
