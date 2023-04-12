const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    let result = members
      .filter((elem) => {
        if (typeof elem === "string") {
          return elem;
        }
      })
      .map((elem) => {
        for (let i = 0; i < elem.length; i++) {
          if (elem[i] !== " ") {
            return elem[i].toUpperCase();
          }
        }
      })
      .sort()
      .join("");
    return result;
  }
}

module.exports = {
  createDreamTeam,
};
