/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Object to map Roman symbols to their values
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prevValue = 0;
    
    // Iterate through the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanValues[s[i]];
        
        // If the current value is less than the previous value,
        // we need to subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        
        prevValue = currentValue;
    }
    
    return total;
};