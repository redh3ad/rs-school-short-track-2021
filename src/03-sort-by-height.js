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
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr2.push(arr[i]);
    }
  }
  arr2 = arr2.sort((a, b) => a - b);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      arr2.splice(j, 0, arr[j]);
    }
  }
  return arr2;
}

module.exports = sortByHeight;
