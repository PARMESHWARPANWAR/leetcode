/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramGroups = new Map();
    
    for (let str of strs) {
        // Sort the characters of the string to use as a key
        const sortedStr = str.split('').sort().join('');
        
        if (!anagramGroups.has(sortedStr)) {
            anagramGroups.set(sortedStr, []);
        }
        
        anagramGroups.get(sortedStr).push(str);
    }
    
    // Convert the Map values to an array and return
    return Array.from(anagramGroups.values());
};