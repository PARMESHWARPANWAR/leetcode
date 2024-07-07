/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // Check if there's enough total gas to complete the circuit
    if (gas.reduce((a, b) => a + b, 0) < cost.reduce((a, b) => a + b, 0)) {
        return -1;
    }
    
    let total = 0;
    let start = 0;
    
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        
        if (total < 0) {
            total = 0;
            start = i + 1;
        }
    }
    
    return start;
};