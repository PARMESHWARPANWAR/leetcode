/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i1 = 0;

    for (let i2 = 0; i2 < nums.length; i2++) {
        if (i2 === 0 || nums[i2 - 1] !== nums[i2]) {
            nums[i1] = nums[i2];
            i1++;
        }
    }

    return i1;
};