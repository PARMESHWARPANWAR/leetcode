/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    // Count connections for each city
    const connections = new Map();
    for (const [a, b] of roads) {
        connections.set(a, (connections.get(a) || 0) + 1);
        connections.set(b, (connections.get(b) || 0) + 1);
    }
    
    // Sort cities by connection count
    const sortedCities = Array.from({length: n}, (_, i) => i)
        .sort((a, b) => (connections.get(b) || 0) - (connections.get(a) || 0));
    
    // Assign values to cities
    const values = new Map();
    let currentValue = n;
    for (const city of sortedCities) {
        values.set(city, currentValue);
        currentValue--;
    }
    
    // Calculate total importance
    let totalImportance = 0;
    for (const [a, b] of roads) {
        totalImportance += values.get(a) + values.get(b);
    }
    
    return totalImportance;
};