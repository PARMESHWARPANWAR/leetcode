/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let totalProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        let profit = prices[i + 1] - prices[i];
        if (profit > 0) {
            totalProfit += profit;
        }
    }
    return totalProfit;  
};