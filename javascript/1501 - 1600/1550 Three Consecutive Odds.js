/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let d=0
    for(let i in arr){
        if(arr[i]%2===0){
            d=0
        }else{
            d++
            if(d>=3){
                return true
            }
        }
    }
    return false
    
};