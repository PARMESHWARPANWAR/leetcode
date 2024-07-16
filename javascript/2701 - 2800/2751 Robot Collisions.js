/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    let ans = {};
    let stack = [];
    
    // Create array of [position, health, direction] and sort it
    let combined = positions.map((p, i) => [p, healths[i], directions[i]]);
    combined.sort((a, b) => a[0] - b[0]);
    
    for (let [p, h, d] of combined) {
        if (d === "R") {
            stack.push([p, h]);
        } else {
            while (stack.length > 0) {
                if (stack[stack.length - 1][1] < h) {
                    stack.pop();
                    h--;
                } else if (stack[stack.length - 1][1] === h) {
                    stack.pop();
                    h = 0;
                    break;
                } else {
                    stack[stack.length - 1][1]--;
                    h = 0;
                    break;
                }
            }
            
            if (h > 0) ans[p] = h;
        }
    }
    
    for (let [p, h] of stack) {
        ans[p] = h;
    }
    
    return positions.filter(p => p in ans).map(p => ans[p]);
};
