// 2418. Sort the People
// https://leetcode.com/problems/sort-the-people/

const sortPeople = function (names, heights) {
  const map = new Map();

  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }

  const sortedMap = new Map([...map].sort((a, b) => b[0] - a[0]));

  return [...sortedMap.values()];
};

console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
//["Bob","Alice","Bob"]
