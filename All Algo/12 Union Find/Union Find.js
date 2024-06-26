class UnionFind {
    constructor(size) {
        this.parent = Array(size).fill(0).map((_, index) => index);
        this.rank = Array(size).fill(0);
    }

    find(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);  // Path compression
        }
        return this.parent[node];
    }

    union(node1, node2) {
        const root1 = this.find(node1);
        const root2 = this.find(node2);

        if (root1 !== root2) {
            if (this.rank[root1] > this.rank[root2]) {
                this.parent[root2] = root1;
            } else if (this.rank[root1] < this.rank[root2]) {
                this.parent[root1] = root2;
            } else {
                this.parent[root2] = root1;
                this.rank[root1] += 1;
            }
        }
    }
}
// Usage
const uf = new UnionFind(10);

uf.union(1, 2);
uf.union(2, 3);

console.log(uf.find(1)); // Output: 1
console.log(uf.find(2)); // Output: 1
console.log(uf.find(3)); // Output: 1

uf.union(4, 5);

console.log(uf.find(4)); // Output: 4
console.log(uf.find(5)); // Output: 4

uf.union(1, 4);

console.log(uf.find(1)); // Output: 1
console.log(uf.find(5)); // Output: 1
