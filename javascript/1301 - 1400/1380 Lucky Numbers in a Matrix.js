/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const result = [];

    for (let i = 0; i < m; i++) {
        let minInRow = Infinity;
        let minColIndex = -1;

        // Find the minimum in the row
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] < minInRow) {
                minInRow = matrix[i][j];
                minColIndex = j;
            }
        }

        let isMaxInCol = true;

        // Check if it's maximum in its column
        for (let k = 0; k < m; k++) {
            if (matrix[k][minColIndex] > minInRow) {
                isMaxInCol = false;
                break;
            }
        }

        if (isMaxInCol) {
            result.push(minInRow);
        }
    }

    return result;
};