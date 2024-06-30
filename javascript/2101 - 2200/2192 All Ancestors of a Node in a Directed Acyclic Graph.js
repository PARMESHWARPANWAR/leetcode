/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    // Create adjacency list
   const graph = Array.from({ length: n }, () => []);
   for (const [from, to] of edges) {
       graph[to].push(from);
   }
   
   // Initialize ancestor sets
   const ancestors = Array.from({ length: n }, () => new Set());
   
   // DFS function to collect ancestors
   function dfs(node, current) {
       for (const parent of graph[node]) {
           if (!ancestors[current].has(parent)) {
               ancestors[current].add(parent);
               dfs(parent, current);
           }
       }
   }
   
   // Collect ancestors for each node
   for (let i = 0; i < n; i++) {
       dfs(i, i);
   }
   
   // Convert sets to sorted arrays
   return ancestors.map(set => Array.from(set).sort((a, b) => a - b));
};