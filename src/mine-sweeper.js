const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  matrix.map((element, index, array) => {
    for (let i = 0; i < element.length; i++) {
      let count = 0;
      if (element[i] !== true) {
        if (element[i - 1] === true) {
          count += 1;
        }
        if (element[i + 1] === true) {
          count += 1;
        }
        if (array[index - 1] !== undefined) {
          if (array[index - 1][i - 1] === true) {
            count += 1;
          }
          if (array[index - 1][i] === true) {
            count += 1;
          }
          if (array[index - 1][i + 1] === true) {
            count += 1;
          }
        }
        if (array[index + 1] !== undefined) {
          if (array[index + 1][i - 1] === true) {
            count += 1;
          }
          if (array[index + 1][i] === true) {
            count += 1;
          }
          if (array[index + 1][i + 1] === true) {
            count += 1;
          }
        }
        element[i] = count;
      }
    }
  });
  matrix.map((element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === true) {
        element[i] = 1;
      }
    }
  });
  return matrix;
}

module.exports = {
  minesweeper,
};
