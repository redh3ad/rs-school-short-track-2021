function deleteDigit(n) {
  let result = 0;
  const numDigits = [];
  let a = n;
  while (a) {
    numDigits.push(a % 10);
    a = Math.floor(a / 10);
  }
  for (let indx = 0; indx < numDigits.length; indx++) {
    let num = 0;
    for (let i = numDigits.length - 1; i >= 0; i--) {
      if (i !== indx) {
        num = num * 10 + numDigits[i];
      }
    }
    result = Math.max(num, result);
  }
  return result;
}

module.exports = deleteDigit;
