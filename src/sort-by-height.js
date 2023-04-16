const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  arr.forEach((element, index) => {
    if (element !== -1) {
      newArr.push(element);
      delete arr[index];
    }
  });
  newArr.sort((a, b) => a - b);
  newArr.forEach((element) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        arr[i] = element;
        break;
      }
    }
  });
  return arr;
}

module.exports = {
  sortByHeight,
};
