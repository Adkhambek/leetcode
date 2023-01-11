// 2341. Maximum Number of Pairs in Array
// https://leetcode.com/problems/maximum-number-of-pairs-in-array/

const numberOfPairs = function (nums) {
  const map = {};
  let count = 0;
  for (const num of nums) {
    if (num in map) {
      count++;
      delete map[num];
    } else map[num] = 1;
  }
  return [count, Object.values(map).length];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
// Answer: [3,1]
/*
Explanation:
Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
*/
