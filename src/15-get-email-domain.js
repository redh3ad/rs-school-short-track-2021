/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('@');
  const k = arr[1].split('');
  const a = '.';
  if (k[0] === a) {
    return arr[2];
  }
  return arr[1];
}

module.exports = getEmailDomain;
