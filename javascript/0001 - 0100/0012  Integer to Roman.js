/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // Define the Roman numeral symbols and their values
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let roman = "";
    
    // Iterate through the values and symbols
    for (let i = 0; i < values.length; i++) {
        // While the number is greater than or equal to the current value
        while (num >= values[i]) {
            // Add the corresponding symbol to the result
            roman += symbols[i];
            // Subtract the value from the number
            num -= values[i];
        }
    }
    
    return roman;
    
};