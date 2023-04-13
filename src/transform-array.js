const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  } else {
    let result = [];
    arr.map((elem, index, array) => {
      if (
        elem !== "--discard-next" &&
        elem !== "--double-next" &&
        elem !== "--double-prev" &&
        elem !== "--discard-prev" &&
        typeof elem !== "undefined" &&
        array[index + 1] !== "--discard-prev"
      ) {
        result.push(elem);
      } else if (elem === "--discard-next") {
        delete arr[index];
        delete arr[index + 1];
      } else if (elem === "--discard-prev") {
        delete arr[index];
      } else if (elem === "--double-next") {
        if (array[index + 1] !== undefined) {
          result.push(array[index + 1]);
        }
      } else if (elem === "--double-prev") {
        if (typeof array[index - 1] !== "undefined") {
          result.push(array[index - 1]);
        }
      }
    });

    return result;
  }
}

module.exports = {
  transform,
};
