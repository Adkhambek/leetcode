// https://leetcode.com/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  let start = 0;
  let end = height.length - 1;
  let startMax = 0;
  let endMax = 0;

  while (start < end) {
    if (height[start] < height[end]) {
      if (height[start] >= startMax) {
        startMax = height[start];
      } else {
        result += startMax - height[start];
      }
      start++;
    } else {
      if (height[end] >= endMax) {
        endMax = height[end];
      } else {
        result += endMax - height[end];
      }
      end--;
    }
  }
  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
/* 
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/
console.log(trap([4, 2, 0, 3, 2, 5]));
/* 
Output: 9
*/
