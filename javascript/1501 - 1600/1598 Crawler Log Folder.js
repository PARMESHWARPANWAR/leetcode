/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0
    for(let i=0;i<logs.length;i++){
        let p = logs[i]
        if(p=='../'){
            if(count==0) continue
            else count--
        }else{
            if(p=='./') continue
            else count++
        }
        
    }
    return count
};