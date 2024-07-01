/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // If the input array is empty, return an empty string
    if (strs.length === 0) return "";
    
    // Find the shortest string in the array
    let shortest = strs.reduce((a, b) => a.length <= b.length ? a : b);
    
    // Iterate through the characters of the shortest string
    for (let i = 0; i < shortest.length; i++) {
        // Check if this character is present at the same position in all strings
        for (let str of strs) {
            if (str[i] !== shortest[i]) {
                // If not, return the prefix up to this point
                return shortest.slice(0, i);
            }
        }
    }
    
    // If we've made it through the entire shortest string, it's the common prefix
    return shortest;
};