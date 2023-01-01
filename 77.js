// 1342. Number of Steps to Reduce a Number to Zero
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

const numberOfSteps = function (num) {
  let step = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    step++;
  }
  return step;
};

console.log(numberOfSteps(14)); //6
console.log(numberOfSteps(8)); //4
console.log(numberOfSteps(123)); //12
