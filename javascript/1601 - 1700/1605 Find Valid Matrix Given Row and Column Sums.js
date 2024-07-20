/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const m = rowSum.length;
    const n = colSum.length;
    const matrix = Array(m).fill().map(() => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Choose the minimum of remaining row sum and column sum
            const value = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = value;
            
            // Update the remaining sums
            rowSum[i] -= value;
            colSum[j] -= value;
        }
    }
    
    return matrix;
};