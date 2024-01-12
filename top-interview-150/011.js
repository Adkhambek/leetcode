// https://leetcode.com/problems/h-index/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let result = 0;
  let n = citations.length;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, Math.min(citations[i], n - i));
  }
  return result;
};

console.log(hIndex([3, 0, 6, 1, 5]));
/* 
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
*/
console.log(hIndex([1, 3, 1]));
/* 
Output: 1
*/
