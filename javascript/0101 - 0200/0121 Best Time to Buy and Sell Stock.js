/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let ans = 0;

    for (let price of prices) {
        ans = Math.max(ans, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }

    return ans;
};