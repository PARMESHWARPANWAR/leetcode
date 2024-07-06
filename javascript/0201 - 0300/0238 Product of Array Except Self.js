/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    let post = []
    let postfix = 1;
    let prefix = 1;

    //Add the prefix for each position

    for (let i = 0; i < nums.length; i++) {

        res.push(prefix)
        prefix *= nums[i];

    }

    //Each position in res now holds the prefix for that position, now we can add the postfix for final result
    for (let i = nums.length - 1; i >= 0; i--) {

        res[i] *= postfix;
        postfix *= nums[i];

    }

    return res;
};