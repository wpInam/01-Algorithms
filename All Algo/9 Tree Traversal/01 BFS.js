class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


// Breadth-First Search (BFS) traversal

function bfs(root) {
  if (!root) return; // if it null | undefined ... 

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const current = queue.shift();
    console.log(current.data);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// console.log("In-order traversal:");
// inOrder(root);

// console.log("Pre-order traversal:");
// preOrder(root);

// console.log("Post-order traversal:");
// postOrder(root);

console.log("BFS traversal:");
bfs(root);
