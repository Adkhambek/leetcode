// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let first = 0;
  let last = height.length - 1;
  let result = 0;

  while (first < last) {
    const minHeight = Math.min(height[first], height[last]);
    const area = (last - first) * minHeight;

    if (height[first] < height[last]) {
      first++;
    } else {
      last--;
    }

    if (result < area) result = area;
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
/* 
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/
console.log(maxArea([1, 1]));
/* 
Output: 1
*/

/* 
Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/
