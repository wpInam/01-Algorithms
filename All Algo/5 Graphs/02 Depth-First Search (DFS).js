class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }

    dfsRecursive(startingVertex) { // Main
        const result = [];
        const visited = new Set();

        const dfs = (vertex) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            });
        };

        dfs(startingVertex);
        return result;
    }

    dfsIterative(startingVertex) { // Main
        const visited = new Set();
        const stack = [startingVertex];
        const result = [];

        visited.add(startingVertex);

        while (stack.length > 0) {
            const vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    dfsPostOrder(startingVertex) { // Main
        const result = [];
        const visited = new Set();

        const dfs = (vertex) => {
            if (!vertex) return;
            visited.add(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            });

            result.push(vertex);
        };

        dfs(startingVertex);
        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();
console.log("DFS Recursive:", graph.dfsRecursive("A")); // Example DFS Recursive starting from vertex "A"
console.log("DFS Iterative:", graph.dfsIterative("A")); // Example DFS Iterative starting from vertex "A"
console.log("DFS Post-Order:", graph.dfsPostOrder("A")); // Example DFS Post-Order starting from vertex "A"
graph.removeEdge("A", "B");
graph.display();
graph.removeVertex("A");
graph.display();
