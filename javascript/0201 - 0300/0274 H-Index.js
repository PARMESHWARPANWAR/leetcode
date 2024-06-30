/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const n = citations.length;
    const count = new Array(n + 1).fill(0);
    
    // Count the number of papers for each citation count
    for (let c of citations) {
        if (c >= n) {
            count[n]++;
        } else {
            count[c]++;
        }
    }
    
    let total = 0;
    // Iterate from the end, looking for the h-index
    for (let i = n; i >= 0; i--) {
        total += count[i];
        if (total >= i) {
            return i;
        }
    }
    
    return 0;
};