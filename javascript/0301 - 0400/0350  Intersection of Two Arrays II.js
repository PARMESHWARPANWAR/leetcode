/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const n = {}
    for(let i in nums2){
        if(n.hasOwnProperty(nums2[i])){
            n[nums2[i]]++
        }else{
            n[nums2[i]] = 1
        }
    }
    const ans = []
    for (let i in nums1){
        if(n.hasOwnProperty(nums1[i]) && n[nums1[i]]>0){
            ans.push(nums1[i])
            n[nums1[i]]--
        }
    }
    return ans
};