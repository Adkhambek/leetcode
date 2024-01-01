// 2427. Number of Common Factors
// https://leetcode.com/problems/number-of-common-factors/

const commonFactors = function (a, b) {
  let count = 0;
  if (a < b) {
    for (let i = 1; i <= a; i++) {
      if (a % i === 0 && b % i === 0) count++;
    }

    return count;
  } else {
    for (let i = 1; i <= b; i++) {
      if (a % i === 0 && b % i === 0) count++;
    }

    return count;
  }
};

console.log(commonFactors(12, 6)); //The common factors of 12 and 6 are 1, 2, 3, 6.
