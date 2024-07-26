/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    // Initialize distance matrix with Infinity
    const dist = Array(n).fill().map(() => Array(n).fill(Infinity));
    
    // Set distance to self as 0
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }
    
    // Initialize distances based on given edges
    for (const [u, v, w] of edges) {
        dist[u][v] = dist[v][u] = w;
    }
    
    // Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    
    let minReachable = n;
    let resultCity = -1;
    
    // Count reachable cities for each city
    for (let i = 0; i < n; i++) {
        const reachable = dist[i].filter(d => d <= distanceThreshold).length;
        if (reachable <= minReachable) {
            minReachable = reachable;
            resultCity = i;
        }
    }
    
    return resultCity;
};