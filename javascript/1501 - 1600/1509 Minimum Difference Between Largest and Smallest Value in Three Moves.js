/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4) return 0;
    
    nums.sort((a, b) => a - b);
    let minDiff = Infinity;
    
    // We have 4 options:
    // 1. Change the first 3 elements
    // 2. Change the first 2 and last 1 elements
    // 3. Change the first 1 and last 2 elements
    // 4. Change the last 3 elements
    
    for (let i = 0; i < 4; i++) {
        minDiff = Math.min(minDiff, nums[nums.length - 4 + i] - nums[i]);
    }
    
    return minDiff;
};