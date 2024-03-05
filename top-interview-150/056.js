// https://leetcode.com/problems/climbing-stairs/solutions/4807141/easy-recursive-javascript-solution-beats-99-of-users/?envType=study-plan-v2&envId=top-interview-150
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  let dp = new Array(n).fill(-1);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};
