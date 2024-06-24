/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    
    // Initialize the pointer for the position to place the next element
    let k = 2;
    
    // Iterate through the array starting from the third element
    for (let i = 2; i < nums.length; i++) {
        // If the current element is different from the element two positions before
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
};