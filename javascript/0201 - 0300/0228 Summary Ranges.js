/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    
    const result = [];
    let start = nums[0];
    let end = nums[0];
    
    for (let i = 1; i <= nums.length; i++) {
        if (i < nums.length && nums[i] === end + 1) {
            end = nums[i];
        } else {
            if (start === end) {
                result.push(start.toString());
            } else {
                result.push(`${start}->${end}`);
            }
            if (i < nums.length) {
                start = nums[i];
                end = nums[i];
            }
        }
    }
    
    return result;
};