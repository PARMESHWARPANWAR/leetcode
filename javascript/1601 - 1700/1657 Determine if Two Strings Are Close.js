/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    // If the lengths are different, they can't be close
   if (word1.length !== word2.length) {
       return false;
   }
   
   // Count character frequencies
   const count1 = new Array(26).fill(0);
   const count2 = new Array(26).fill(0);
   
   // Track character presence
   const present1 = new Array(26).fill(false);
   const present2 = new Array(26).fill(false);
   
   // Count frequencies and mark presence
   for (let i = 0; i < word1.length; i++) {
       const char1 = word1.charCodeAt(i) - 97; // 'a' is 97 in ASCII
       const char2 = word2.charCodeAt(i) - 97;
       
       count1[char1]++;
       count2[char2]++;
       
       present1[char1] = true;
       present2[char2] = true;
   }
   
   // Check if the same characters are present in both strings
   for (let i = 0; i < 26; i++) {
       if (present1[i] !== present2[i]) {
           return false;
       }
   }
   
   // Sort frequency counts
   count1.sort((a, b) => a - b);
   count2.sort((a, b) => a - b);
   
   // Check if frequency counts match
   for (let i = 0; i < 26; i++) {
       if (count1[i] !== count2[i]) {
           return false;
       }
   }
   
   return true;
};