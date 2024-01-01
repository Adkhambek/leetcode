/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   nums1.length = m;
//   nums2.length = n;

//   nums1 = nums1.concat(nums2).sort((a, b) => a - b);
// };

var merge = function (nums1, m, nums2, n) {
  for (let i = m, k = 0; i <= m + n - 1; i++) {
    nums1[i] = nums2[k++];
  }

  nums1.sort((a, b) => a - b);

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// [1,2,2,3,5,6]
