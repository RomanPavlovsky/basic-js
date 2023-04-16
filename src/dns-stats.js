const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  if (domains.length === 0) {
    return obj;
  } else {
    let shortCount = 0;
    let longCount = 0;
    let arr = domains.join(".").split(".");
    arr.forEach((element, index, array) => {
      if (element === array[arr.length - 1]) {
        shortCount += 1;
        obj[`.${element}`] = shortCount;
      }
    });
    arr.forEach((element, index, array) => {
      if (element === array[arr.length - 2]) {
        longCount += 1;
        obj[`.${array[arr.length - 1]}.${element}`] = longCount;
      }
    });
    arr.forEach((element, index, array) => {
      if (
        element !== array[arr.length - 2] &&
        element !== array[arr.length - 1]
      ) {
        let count = arr.filter((item) => item === element).length;

        obj[`.${array[arr.length - 1]}.${array[arr.length - 2]}.${element}`] =
          count;
      }
    });

    return obj;
  }
}

module.exports = {
  getDNSStats,
};
