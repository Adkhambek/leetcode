// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let right = 1;
  let left = 0;
  totalProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      totalProfit += prices[right] - prices[left];
    }
    left = right;
    right++;
  }

  return totalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
/* 
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7. 
*/
console.log(maxProfit([1, 2, 3, 4, 5]));
/* 
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
*/
console.log(maxProfit([7, 6, 4, 3, 1]));
/* 
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
*/
