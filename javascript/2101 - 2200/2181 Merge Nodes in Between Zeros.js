/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    // Create a dummy node to handle the case where the head needs to be modified
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Initialize pointers
    let prev = dummy;
    let current = head.next;  // Start from the node after the first 0
    let sum = 0;
    
    while (current) {
        if (current.val === 0) {
            // We've reached the end of a segment
            let newNode = new ListNode(sum);
            prev.next = newNode;
            prev = newNode;
            sum = 0;
        } else {
            sum += current.val;
        }
        
        current = current.next;
    }
    
    // Return the head of the modified list (skip the dummy node)
    return dummy.next;
};