/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = n;
  while (num > 9) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num -= num % 10;
      num /= 10;
    }
    num = sum;
  }
  return num;
}

module.exports = getSumOfDigits;
