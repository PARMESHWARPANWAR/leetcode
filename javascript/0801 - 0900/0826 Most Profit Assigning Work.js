/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    // Combine difficulty and profit into an array of jobs
    let jobs = difficulty.map((d, i) => [d, profit[i]]);
    
    // Sort jobs by difficulty
    jobs.sort((a, b) => a[0] - b[0]);

    // Sort worker array
    worker.sort((a, b) => a - b);

    let max_profit = 0;
    let total_profit = 0;
    let i = 0;

    // Loop through each worker
    for (let w of worker) {
        // While there are jobs the worker can do
        while (i < jobs.length && w >= jobs[i][0]) {
            // Update max_profit with the highest profit of jobs the worker can do
            max_profit = Math.max(max_profit, jobs[i][1]);
            i++;
        }
        // Add the best profit the worker can achieve to total_profit
        total_profit += max_profit;
    }

    return total_profit;
};