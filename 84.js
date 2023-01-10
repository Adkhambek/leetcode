// 1588. Sum of All Odd Length Subarrays
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

const sumOddLengthSubarrays = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j + i < arr.length; j += 2) {
      const subarray = arr.slice(i, j + i + 1);
      result += sumArr(subarray);
    }
  }

  function sumArr(arr) {
    let total = 0;
    for (const num of arr) {
      total += num;
    }
    return total;
  }

  return result;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
/*
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
*/
