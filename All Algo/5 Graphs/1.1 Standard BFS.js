class Graph {
  bfs (startingVertex) {
    const visited = new Set()
    const queue = [startingVertex]
    const result = []

    visited.add(startingVertex)

    while (queue.length > 0) {
      const vertex = queue.shift()
      result.push(vertex)

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

graph.display();
console.log("Standard BFS:", graph.bfs("A"));
console.log("Shortest Path BFS:", graph.shortestPathBFS("A"));
console.log("Multi-source BFS:", graph.multiSourceBFS(["A", "B"]));
console.log("Bidirectional BFS:", graph.bidirectionalBFS("A", "C"));
