/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let nodes = {}
    let children = new Set()
      for (let [p, c, isLeft] of descriptions) {
        if (!(p in nodes)) {
            nodes[p] = new TreeNode(p);
        }
        if (!(c in nodes)) {
            nodes[c] = new TreeNode(c);
        }

        if (isLeft) {
            nodes[p].left = nodes[c];
        } else {
            nodes[p].right = nodes[c];
        }

        children.add(c);
    }

    
     function findRoot(nodes, children) {
        for (let val in nodes) {
            if (!children.has(Number(val))) {
                return Number(val);
            }
        }
        throw new Error("No root found");
    }

    let rootVal = findRoot(nodes, children);

    return nodes[rootVal]

};