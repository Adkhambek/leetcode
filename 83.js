// 1773. Count Items Matching a Rule
// https://leetcode.com/problems/count-items-matching-a-rule/

const countMatches = function (items, ruleKey, ruleValue) {
  const key = {
    type: 0,
    color: 1,
    name: 2,
  };

  const index = key[ruleKey];
  let count = 0;

  for (const item of items) {
    if (item[index] === ruleValue) count++;
  }

  return count;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
