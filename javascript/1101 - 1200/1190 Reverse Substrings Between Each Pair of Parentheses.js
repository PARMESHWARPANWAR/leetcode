/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [''];
    
    for (let char of s) {
        if (char === '(') {
            stack.push('');
        } else if (char === ')') {
            let reversedStr = stack.pop().split('').reverse().join('');
            stack[stack.length - 1] += reversedStr;
        } else {
            stack[stack.length - 1] += char;
        }
    }
    
    return stack[0];
};