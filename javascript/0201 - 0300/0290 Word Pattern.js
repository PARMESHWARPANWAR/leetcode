/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    
    // If the number of words doesn't match the pattern length, return false
    if (pattern.length !== words.length) {
        return false;
    }
    
    const patternToWord = new Map();
    const wordToPattern = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        
        // Check if the current character is already mapped to a word
        if (patternToWord.has(char)) {
            // If it's mapped to a different word, return false
            if (patternToWord.get(char) !== word) {
                return false;
            }
        } else {
            // If the word is already mapped to a different character, return false
            if (wordToPattern.has(word)) {
                return false;
            }
            // Otherwise, create the mappings
            patternToWord.set(char, word);
            wordToPattern.set(word, char);
        }
    }
    
    // If we've made it through the entire pattern, return true
    return true;

};