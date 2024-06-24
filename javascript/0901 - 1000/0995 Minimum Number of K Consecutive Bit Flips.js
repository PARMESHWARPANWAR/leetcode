/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    const n = nums.length;
    const flips = new Array(n + 1).fill(0);
    let flipped = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        if (i >= k) {
            flipped ^= flips[i - k];
        }

        if (nums[i] ^ flipped === 0) {
            if (i + k > n) {
                return -1;
            }
            flips[i] = 1;
            flipped ^= 1;
            result++;
        }
    }

    return result;
};