const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let result = [];
  let count = 1;
  arr.forEach((element, index, array) => {
    if (element === array[index + 1]) {
      count += 1;
    } else {
      if (count !== 1) {
        result.push(count);
        result.push(element);
        count = 1;
      } else {
        result.push(element);
      }
    }
  });
  return result.join("");
}

module.exports = {
  encodeLine,
};
