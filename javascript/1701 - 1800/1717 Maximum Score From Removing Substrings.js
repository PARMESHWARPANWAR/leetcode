/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let points = 0;
    let stack = [];
    
    // Determine which substring to remove first based on points
    let [first, second, firstPoints, secondPoints] = x > y ? ['ab', 'ba', x, y] : ['ba', 'ab', y, x];
    
    // First pass: remove the higher point substring
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] + char === first) {
            stack.pop();
            points += firstPoints;
        } else {
            stack.push(char);
        }
    }
    
    // Second pass: remove the lower point substring
    let newStack = [];
    for (let char of stack) {
        if (newStack.length > 0 && newStack[newStack.length - 1] + char === second) {
            newStack.pop();
            points += secondPoints;
        } else {
            newStack.push(char);
        }
    }
    
    return points;
};