/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    const n = customers.length;
    
    // Calculate base satisfied customers
    let baseSatisfied = customers.reduce((sum, customer, i) => 
        sum + (grumpy[i] === 0 ? customer : 0), 0);
    
    // Calculate additional satisfied customers in the first window
    let currentAdditional = customers.slice(0, minutes)
        .reduce((sum, customer, i) => sum + customer * grumpy[i], 0);
    let maxAdditional = currentAdditional;
    
    // Slide the window and update maxAdditional
    for (let i = minutes; i < n; i++) {
        currentAdditional += customers[i] * grumpy[i] - customers[i - minutes] * grumpy[i - minutes];
        maxAdditional = Math.max(maxAdditional, currentAdditional);
    }
    
    return baseSatisfied + maxAdditional;
};