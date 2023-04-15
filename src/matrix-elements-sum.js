const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  let newarr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let numbers = [];
    matrix.forEach((element) => {
      numbers.push(element[i]);
    });
    newarr.push(numbers);
  }
  newarr.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] !== 0 && element[i - 1] !== 0) {
        count += element[i];
      }
    }
  });
  return count;
}

module.exports = {
  getMatrixElementsSum,
};
