// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} prices
 * @return {number}
 */

// Time Limit Exceeded
/* var maxProfit = function (prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < i; j++) {
      const profit = prices[i] - prices[j];
      if (result < profit) result = profit;
    }
  }

  return result;
}; */

var maxProfit = function (prices) {
  let right = 0;
  let left = 0;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// Output: 5

console.log(maxProfit([7, 6, 4, 3, 1]));
// Output: 0
