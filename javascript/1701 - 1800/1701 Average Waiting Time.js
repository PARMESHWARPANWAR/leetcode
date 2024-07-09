/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let prevTime = 0;
    let totalWait = 0;
    
    for (let i = 0; i < customers.length; i++) {
      const current = customers[i];
      if (i === 0) {
        prevTime = current[0] + current[1];
        totalWait += prevTime - current[0];
      } else {
        if (current[0] > prevTime) {
          prevTime = current[0] + current[1];
          totalWait += prevTime - current[0];
        } else {
          prevTime += current[1];
          totalWait += prevTime - current[0];
        }
      }
    }
    
    return totalWait / customers.length;
  };