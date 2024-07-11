/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ').filter(word => word !== '');
     
     // Reverse the array of words
     const reversedWords = words.reverse();
     
     // Join the reversed words with a single space
     return reversedWords.join(' ');
 };