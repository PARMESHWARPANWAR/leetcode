/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    // Step 1: Perform in-order traversal to get sorted array
    const inorderTraversal = (node) => {
        if (!node) return [];
        return [...inorderTraversal(node.left), node.val, ...inorderTraversal(node.right)];
    };
    
    const sortedValues = inorderTraversal(root);
    
    // Step 2: Construct balanced BST from sorted array
    const constructBalancedBST = (left, right) => {
        if (left > right) return null;
        
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(sortedValues[mid]);
        
        node.left = constructBalancedBST(left, mid - 1);
        node.right = constructBalancedBST(mid + 1, right);
        
        return node;
    };
    
    return constructBalancedBST(0, sortedValues.length - 1);
};