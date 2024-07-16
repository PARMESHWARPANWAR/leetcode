/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Initialize the position where we'll place non-zero elements
    let nonZeroPos = 0;
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap the current non-zero element with the element at nonZeroPos
            [nums[nonZeroPos], nums[i]] = [nums[i], nums[nonZeroPos]];
            nonZeroPos++;
        }
    }
    
    // At this point, all non-zero elements are at the beginning of the array
    // and zeros are at the end
};