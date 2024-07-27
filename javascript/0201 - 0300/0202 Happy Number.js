/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // Helper function to calculate the sum of squares of digits
  function sumOfSquares(num) {
      return num.toString().split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), 2), 0);
  }
  
  // Floyd's Cycle-Finding Algorithm
  let slow = n;
  let fast = n;
  
  do {
      slow = sumOfSquares(slow);
      fast = sumOfSquares(sumOfSquares(fast));
  } while (slow !== fast);
  
  // If the cycle ends in 1, it's a happy number
  return slow === 1;
};