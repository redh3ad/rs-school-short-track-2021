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
  const a = [];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (i < str.length - 1 && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    if (count === 1) {
      a.push(`${str[i]}`);
    } else {
      a.push(`${count}${str[i]}`);
    }
  }
  return a.join('');
}

module.exports = encodeLine;
