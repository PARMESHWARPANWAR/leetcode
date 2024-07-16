/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const A = 'aeiouAEIOU'
    let count = 0
    let maxVov = 0
    for(let i =0;i<k;i++){
        if(A.includes(s[i])){
            count++
        }
    }
    let i=0
    let j=k
    maxVov = count
    while(j<s.length){
        let isI = A.includes(s[i])
        let isJ = A.includes(s[j])
        if(isI) count--;
        if(isJ) count++;
        maxVov = Math.max(maxVov,count)
        i++;
        j++;
    }
    return maxVov
};