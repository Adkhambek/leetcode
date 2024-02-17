// https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
class UnionFind {
  constructor() {
    this.parents = new Map();
    this.sizes = new Map();
  }

  add(val) {
    this.parents.set(val, val);
    this.sizes.set(val, 1);
  }

  find(val) {
    if (!this.parents.has(val)) return null;

    if (this.parents.get(val) === val) return val;

    const parent = this.find(this.parents.get(val));
    this.parents.set(val, parent);
    return parent;
  }

  union(a, b) {
    const aParent = this.find(a);
    const bParent = this.find(b);

    if (aParent === null || bParent === null) return;
    if (aParent === bParent) return;

    const aSize = this.sizes.get(aParent);
    const bSize = this.sizes.get(bParent);

    if (aSize > bSize) {
      this.parents.set(bParent, aParent);
      this.sizes.set(aParent, aSize + bSize);
    } else {
      this.parents.set(aParent, bParent);
      this.sizes.set(bParent, aSize + bSize);
    }
  }

  maxSize() {
    let maxSize = 0;
    for (const [_, size] of this.sizes) maxSize = Math.max(maxSize, size);
    return maxSize;
  }
}

function longestConsecutive(nums) {
  const uf = new UnionFind();
  for (const num of nums) uf.add(num);

  for (const num of nums) {
    uf.union(num, num - 1);
    uf.union(num, num + 1);
  }

  return uf.maxSize();
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
/* Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. */
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// Output: 9

/* 
Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
