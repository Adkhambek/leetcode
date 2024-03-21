var rob = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  const dpRobbed = [nums[0]];
  const dpSkipped = [0];

  for (let i = 1; i < n; i++) {
    dpRobbed[i] = dpSkipped[i - 1] + nums[i];

    dpSkipped[i] = Math.max(dpRobbed[i - 1], dpSkipped[i - 1]);
  }

  return Math.max(dpRobbed[n - 1], dpSkipped[n - 1]);
};

const nums = [2, 7, 9, 3, 1];
const result = rob(nums);
console.log(result);
