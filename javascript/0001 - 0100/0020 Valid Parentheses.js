/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.length === 0) {
                return false; // Closing bracket without a corresponding opening bracket
            }
            if (stack[stack.length - 1] === bracketPairs[char]) {
                stack.pop();
            } else {
                return false; // Mismatched bracket
            }
        }
    }

    return stack.length === 0;
};