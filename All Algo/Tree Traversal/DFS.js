class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

// Depth-First Search (DFS) traversals

// In-order traversal
function inOrder(root) {
    if (root) {
      inOrder(root.left);
      console.log(root.data);
      inOrder(root.right);
    }
  }
  
  // Pre-order traversal
  function preOrder(root) {
    if (root) {
      console.log(root.data);
      preOrder(root.left);
      preOrder(root.right);
    }
  }
  
  // Post-order traversal
  function postOrder(root) {
    if (root) {
      postOrder(root.left);
      postOrder(root.right);
      console.log(root.data);
    }
  }