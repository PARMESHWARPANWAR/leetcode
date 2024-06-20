/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {''
    let low = 0;
    let high = Math.floor(Math.sqrt(c));
    while(low <= high) {
        const sum = low*low + high*high;
        if(sum === c) {
            return true;
        } else if(sum < c) {
            low++;
        } else {
            high -= 1;
        }

    }
    return false;  
};