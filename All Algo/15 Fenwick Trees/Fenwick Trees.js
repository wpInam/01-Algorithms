class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = Array(size + 1).fill(0);
    }

    // Update operation: adds `value` to the element at `index`
    update(index, value) {
        // Fenwick Tree uses 1-based indexing
        for (let i = index; i <= this.size; i += i & -i) {
            this.tree[i] += value;
        }
    }

    // Prefix Sum operation: calculates the sum of elements up to `index`
    prefixSum(index) {
        let sum = 0;
        for (let i = index; i > 0; i -= i & -i) {
            sum += this.tree[i];
        }
        return sum;
    }

    // Range Sum operation: calculates the sum of elements in the range [left, right]
    rangeSum(left, right) {
        return this.prefixSum(right) - this.prefixSum(left - 1);
    }
}

// Usage example
const fenwickTree = new FenwickTree(10);
fenwickTree.update(3, 5);
fenwickTree.update(5, 2);
console.log(fenwickTree.prefixSum(5)); // Output: 7 (5 + 0 + 0 + 0 + 2)
console.log(fenwickTree.rangeSum(3, 5)); // Output: 7 (5 + 0 + 2)

/* 
Explanation
Constructor: Initializes the Fenwick Tree with the given size and an internal array filled with zeros.
Update: Adds a value to a specific index. The loop updates all relevant nodes in the tree.
Prefix Sum: Computes the sum of elements from the start to a specific index. The loop adds up values from relevant nodes.
Range Sum: Computes the sum of elements in a specific range using the prefix sum function.
Advantages of Fenwick Trees
Efficiency: Both update and prefix sum operations are 
O(logn), making it very efficient for dynamic data.
Simplicity: Easier to implement and understand compared to other data structures like Segment Trees.
Fenwick Trees are highly efficient for scenarios involving cumulative frequency tables, prefix sums, and range queries. By understanding and implementing Fenwick Trees in JavaScript, you can handle a wide range of problems involving dynamic arrays efficiently.

*/