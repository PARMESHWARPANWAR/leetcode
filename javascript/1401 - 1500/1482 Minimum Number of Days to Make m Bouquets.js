/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

var minDays = function(bloomDay, m, k) {
    if (m*k > bloomDay.length){
        return -1
    }

    left = Math.min(...bloomDay)
    right = Math.max(...bloomDay)
    
    function canMakeBouquets(day){
        let flower = 0
        let bouquests = 0
        for(let i=0;i<bloomDay.length;i++){
            let md = bloomDay[i]
            if(md<=day){
                flower += 1
                if(flower==k){
                    bouquests +=1
                    flower=0
                }
            }else{
                flower = 0
            }

        }
        return bouquests >=m
    } 

    while (left < right){
        mid = Math.floor((left + right)/2)
        if(canMakeBouquets(mid)){
            right = mid
        }else{
            left = mid+1       
        }
    }
        
    return left     
};