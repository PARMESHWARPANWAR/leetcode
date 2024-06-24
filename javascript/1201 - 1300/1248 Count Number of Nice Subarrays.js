/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    // Convert to binary array (1 for odd, 0 for even)
   const binary = nums.map(num => num % 2);
   
   // Calculate prefix sum
   const prefixSum = [0];
   for (let num of binary) {
       prefixSum.push(prefixSum[prefixSum.length - 1] + num);
   }
   
   // Count subarrays
   const count = new Map();
   count.set(0, 1);
   let result = 0;
   
   for (let i = 1; i < prefixSum.length; i++) {
       const sumValue = prefixSum[i];
       if (count.has(sumValue - k)) {
           result += count.get(sumValue - k);
       }
       count.set(sumValue, (count.get(sumValue) || 0) + 1);
   }
   
   return result;
};