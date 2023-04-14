const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = Array.from(String(n));
  let numbers = [];
  let backup;
  res.forEach((elem, index, array) => {
    let count = "";
    backup = elem;
    delete array[index];
    console.log(res);
    for (const elem of res) {
      if (typeof elem !== "undefined") {
        count += elem;
      }
    }
    numbers.push(count);
    array[index] = backup;
  });
  let result = numbers.map((elem) => {
    return Number(elem);
  });
  return Math.max(...result);
}
module.exports = {
  deleteDigit,
};
