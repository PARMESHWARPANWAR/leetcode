/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexes = {};
   for (let i = 0; i < nums.length; i++) {
       const num = nums[i];
       const complement = target - num;
       if (indexes.hasOwnProperty(complement)) {
           return [indexes[complement], i];
       }
       indexes[num] = i;
   }
};