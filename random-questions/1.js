/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
/* var flat = function (arr, n) {
  if (n === 0) {
    return arr;
  }

  const flattedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattedArr.push(...arr[i]);
    } else {
      flattedArr.push(arr[i]);
    }
  }

  return flat(flattedArr, n - 1);
}; */

var flat = function (arr, n) {
  const res = [];

  function helper(arr, n) {
    for (const val of arr) {
      if (Array.isArray(val) && n > 0) {
        helper(val, n - 1);
      } else {
        res.push(val);
      }
    }

    return res;
  }

  return helper(arr, n);
};

console.log(
  flat(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    1
  )
);

/* 
Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

Explanation
The maximum depth of any subarray is 1. Thus, all of them are flattened.
*/

/* 
Constraints:

0 <= count of numbers in arr <= 105
0 <= count of subarrays in arr <= 105
maxDepth <= 1000
-1000 <= each number <= 1000
0 <= n <= 1000
*/
