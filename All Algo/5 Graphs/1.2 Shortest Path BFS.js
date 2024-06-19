class Graph {
  shortestPathBFS (startingVertex) {
    const visited = new Set()
    const queue = [[startingVertex, 0]]
    const distances = {}

    visited.add(startingVertex)
    distances[startingVertex] = 0

    while (queue.length > 0) {
      const [vertex, distance] = queue.shift()

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          distances[neighbor] = distance + 1
          queue.push([neighbor, distance + 1])
        }
      })
    }

    return distances
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
