class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(2 * this.n);

        // Initialize the leaves of the segment tree
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i];
        }

        // Build the tree by calculating parents
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    // Update value at position p
    update(p, value) {
        // Set value at position p
        this.tree[p + this.n] = value;
        p = p + this.n;

        // Move upward and update parents
        for (let i = p; i > 1; i >>= 1) {
            this.tree[i >> 1] = this.tree[i] + this.tree[i ^ 1];
        }
    }

    // Range query from l to r
    query(l, r) {
        let sum = 0;
        for (l += this.n, r += this.n; l < r; l >>= 1, r >>= 1) {
            if (l & 1) sum += this.tree[l++];
            if (r & 1) sum += this.tree[--r];
        }
        return sum;
    }
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11];
let segTree = new SegmentTree(arr);

console.log(segTree.query(1, 3)); // Output: 8 (3 + 5)
segTree.update(1, 10);
console.log(segTree.query(1, 3)); // Output: 15 (10 + 5)

/* 
    // Explanation
    Constructor:

    Initializes the segment tree with the given array.
    Fills the leaves of the tree with the array elements.
    Builds the tree bottom-up by calculating the sum of child nodes.
    Update:

    Updates the value at a specific position.
    Moves upward to update the parent nodes.
    Query:

    Queries the sum of elements in a specific range.
    Moves from the leaves towards the root to get the sum of the specified range.
    This basic implementation handles range sum queries. Depending on your use case, you can adapt the Segment Tree for other types of range queries, such as minimum or maximum.
 */




