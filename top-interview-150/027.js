// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  while (low <= high) {
    if (numbers[low] + numbers[high] > target) high--;
    else if (numbers[low] + numbers[high] < target) low++;
    else return [low + 1, high + 1];
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
/* 
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/
console.log(twoSum([2, 3, 4], 6));
/* 
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
*/
console.log(twoSum([-1, 0], -1));
/* 
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

/* 
Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
*/
