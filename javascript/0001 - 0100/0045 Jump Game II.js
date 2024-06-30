/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let current = -1;
    let next = 0;
    let steps = 0;

    for (let i = 0; next < nums.length -1; i++) {
        if (i > current) {
            steps++;
            current = next;
        }
        next = Math.max(next, nums[i] + i);
    }
    return steps;
};