const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }
  const defaults = {
    separator: "+",
    additionSeparator: "|",
  };
  const fullOptions = {
    ...defaults,
    ...options,
  };
  let addition = Array(fullOptions.additionRepeatTimes)
    .fill(fullOptions.addition)
    .join(`${fullOptions.additionSeparator}`);

  let result = Array(fullOptions.repeatTimes)
    .fill(`${str}${addition}`)
    .join(`${fullOptions.separator}`);
  return result;
}

module.exports = {
  repeater,
};
