/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let pre = null
    let a = head
    let d = []
    let k = 0

    while (a.next){
        if ( pre &&  ((pre.val < a.val && a.val > a.next.val) || (pre.val > a.val && a.val < a.next.val))){
            d.push(k)
        }
        pre = a
        a = a.next
        k += 1   
    }
    if (d.length<=1) return [-1,-1] 
    let minD = k
    let maxD = 1
      
    maxD = d[d.length-1] - d[0]

    for (let i=0;i<d.length-1;i++){
        minD = Math.min(minD, d[i+1]-d[i])
    }
     
    return [minD, maxD]   

};