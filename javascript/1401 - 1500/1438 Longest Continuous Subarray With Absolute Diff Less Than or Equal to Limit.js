/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const maxDeque = [];
    const minDeque = [];
    let left = 0;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
        // Maintain maxDeque
        while (maxDeque.length && nums[right] > nums[maxDeque[maxDeque.length - 1]]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // Maintain minDeque
        while (minDeque.length && nums[right] < nums[minDeque[minDeque.length - 1]]) {
            minDeque.pop();
        }
        minDeque.push(right);

        // Shrink window if necessary
        while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            left++;
            if (left > maxDeque[0]) maxDeque.shift();
            if (left > minDeque[0]) minDeque.shift();
        }

        // Update result
        result = Math.max(result, right - left + 1);
    }

    return result;
};