/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let arr = nums.sort((a,b)=>a-b)
    let i=0
    let j=nums.length-1
    let count = 0
    while(i<j){
        let a = arr[i]
        let b = arr[j]
        let sum = a+b
        if(sum==k){
            count++
            i++
            j--
        }else if(sum<k){
            i++
        }else{
            j--
        }
    }
    return count
    
};