/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const s11 = s1.split('');
  const s22 = s2.split('');
  for (let i = 0; i < s11.length; i++) {
    for (let j = 0; j < s22.length; j++) {
      if (s11[i] === s22[j]) {
        count++;
        s22.splice(j, 1);
        break;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
