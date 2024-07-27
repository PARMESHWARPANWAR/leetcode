/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    // Initialize the distance matrix
     const dist = Array.from({length: 26}, () => Array(26).fill(Infinity));
     for (let i = 0; i < 26; i++) {
         dist[i][i] = 0;
     }
 
     // Build the initial graph
     for (let i = 0; i < original.length; i++) {
         const from = original[i].charCodeAt(0) - 97;
         const to = changed[i].charCodeAt(0) - 97;
         dist[from][to] = Math.min(dist[from][to], cost[i]);
     }
 
     // Floyd-Warshall algorithm
     for (let k = 0; k < 26; k++) {
         for (let i = 0; i < 26; i++) {
             for (let j = 0; j < 26; j++) {
                 dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
             }
         }
     }
 
     // Calculate the minimum cost to transform source to target
     let totalCost = 0;
     for (let i = 0; i < source.length; i++) {
         const from = source[i].charCodeAt(0) - 97;
         const to = target[i].charCodeAt(0) - 97;
         if (from !== to) {
             if (dist[from][to] === Infinity) {
                 return -1; // Impossible to transform
             }
             totalCost += dist[from][to];
         }
     }
 
     return totalCost;
 };