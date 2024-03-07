/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = M.length,
    depth = ~~(n / 2);
  for (let i = 0; i < depth; i++) {
    let len = n - 2 * i - 1,
      opp = n - 1 - i;
    for (let j = 0; j < len; j++) {
      let temp = M[i][i + j];
      M[i][i + j] = M[opp - j][i];
      M[opp - j][i] = M[opp][opp - j];
      M[opp][opp - j] = M[i + j][opp];
      M[i + j][opp] = temp;
    }
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [[7,4,1],[8,5,2],[9,6,3]]
