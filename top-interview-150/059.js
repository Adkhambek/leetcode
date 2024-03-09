/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const elementsOrder = [];
  while (matrix.length > 0 && matrix[0][0] !== undefined) {
    // Steal the first row.
    elementsOrder.push(...matrix.shift());
    // Steal the right items.
    matrix.forEach((row) => elementsOrder.push(row.pop()));
    // Turn the matrix over.
    matrix.reverse().map((row) => row.reverse());
  }
  return elementsOrder;
};
