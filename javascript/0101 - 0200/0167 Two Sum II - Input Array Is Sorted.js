/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const currentSum = numbers[left] + numbers[right];
        
        if (currentSum === target) {
            return [left + 1, right + 1]; // Adding 1 because the array is 1-indexed
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    // If no solution is found (which shouldn't happen according to the problem statement)
    return []; 
};