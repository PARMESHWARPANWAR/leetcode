/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    // Count the frequency of each number
    const freqCount = new Map();
    for (const num of nums) {
        freqCount.set(num, (freqCount.get(num) || 0) + 1);
    }
    
    // Convert the Map to an array of [num, freq] pairs and sort it
    const sortedNums = Array.from(freqCount.entries()).sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]; // Sort by frequency (ascending)
        } else {
            return b[0] - a[0]; // If frequencies are equal, sort by number (descending)
        }
    });
    
    // Create the result array
    const result = [];
    for (const [num, freq] of sortedNums) {
        result.push(...Array(freq).fill(num));
    }
    
    return result;
};