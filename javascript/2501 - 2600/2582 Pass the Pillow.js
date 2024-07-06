/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    if(time<n) return time+1
    const  k = n-1
    let p = Math.floor(time/k)
    let r = time%k
    if(p%2==0){
        return r+1
    }else{
        return n-r
    }
};