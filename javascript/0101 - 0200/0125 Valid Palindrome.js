/**
 * @param {string} s
 * @return {boolean}
 */

function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122)   // a-z
    );
  }
  
  var isPalindrome = function(s) {
      let k = "";
      for (let i = 0; i < s.length; i++) {
          if (isAlphanumeric(s[i])) {
          k += s[i].toLowerCase();
          }
      }
      return k === k.split("").reverse().join("");
  };