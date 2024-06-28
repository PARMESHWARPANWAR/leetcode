/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [firstEdge, secondEdge] = edges;
    
    // The node that appears in both edges is the     
    if (secondEdge.includes(firstEdge[0])) {
      return firstEdge[0];
    } else {
        return firstEdge[1];
    }
};