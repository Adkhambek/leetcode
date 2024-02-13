// https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split("").sort().join("");
    if (map.has(sortedString)) {
      let array = map.get(sortedString);
      array.push(strs[i]);
      map.set(sortedString, array);
    } else {
      map.set(sortedString, [strs[i]]);
    }
  }

  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""]));
// [[""]]
console.log(groupAnagrams(["a"]));
// [["a"]]
