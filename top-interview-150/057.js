/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const elementsOrder: number[] = [];
  while (matrix.length > 0 && matrix[0][0] !== undefined) {
    elementsOrder.push(...matrix.shift());
    matrix.forEach((row) => elementsOrder.push(row.pop()));
    matrix.reverse().map((row) => row.reverse());
  }
  return elementsOrder;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [1,2,3,6,9,8,7,4,5]
