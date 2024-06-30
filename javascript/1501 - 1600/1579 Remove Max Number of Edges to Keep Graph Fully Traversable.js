class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.components = n;
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let px = this.find(x);
        let py = this.find(y);
        if (px === py) {
            return false;
        }
        if (this.rank[px] < this.rank[py]) {
            this.parent[px] = py;
        } else if (this.rank[px] > this.rank[py]) {
            this.parent[py] = px;
        } else {
            this.parent[py] = px;
            this.rank[px]++;
        }
        this.components--;
        return true;
    }
}



/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    let alice = new UnionFind(n);
    let bob = new UnionFind(n);
    
    let edgesUsed = 0;
    
    // Process type 3 edges
    for (let [edgeType, u, v] of edges) {
        if (edgeType === 3) {
            let successAlice = alice.union(u-1, v-1);
            let successBob = bob.union(u-1, v-1);
            if (successAlice || successBob) {
                edgesUsed++;
            }
        }
    }
    
    // Process type 1 edges (Alice only)
    for (let [edgeType, u, v] of edges) {
        if (edgeType === 1) {
            if (alice.union(u-1, v-1)) {
                edgesUsed++;
            }
        }
    }
    
    // Process type 2 edges (Bob only)
    for (let [edgeType, u, v] of edges) {
        if (edgeType === 2) {
            if (bob.union(u-1, v-1)) {
                edgesUsed++;
            }
        }
    }
    
    // Check if both Alice and Bob can traverse all nodes
    if (alice.components === 1 && bob.components === 1) {
        return edges.length - edgesUsed;
    } else {
        return -1;
    }
};