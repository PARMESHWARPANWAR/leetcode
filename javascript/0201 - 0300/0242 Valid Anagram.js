/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // If the lengths are different, they can't be anagrams
    if (s.length !== t.length) {
        return false;
    }
    
    // Create a map to store character counts
    const charCount = new Map();
    
    // Count characters in s
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Decrement counts for characters in t
    for (let char of t) {
        if (!charCount.has(char)) {
            return false;  // Character not in s
        }
        
        charCount.set(char, charCount.get(char) - 1);
        
        if (charCount.get(char) === 0) {
            charCount.delete(char);
        }
    }
    
    // If all counts are zero, the map should be empty
    return charCount.size === 0;
};