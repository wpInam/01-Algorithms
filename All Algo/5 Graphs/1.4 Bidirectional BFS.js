class Graph {
  bidirectionalBFS (start, goal) {
    if (start === goal) return [start]

    const visitedStart = new Set([start])
    const visitedGoal = new Set([goal])
    const queueStart = [start]
    const queueGoal = [goal]
    const parentStart = {}
    const parentGoal = {}

    while (queueStart.length > 0 && queueGoal.length > 0) {
      const startVertex = queueStart.shift()
      const goalVertex = queueGoal.shift()

      for (const neighbor of this.adjacencyList[startVertex]) {
        if (visitedGoal.has(neighbor)) {
          return this.constructPath(neighbor, parentStart, parentGoal)
        }
        if (!visitedStart.has(neighbor)) {
          visitedStart.add(neighbor)
          queueStart.push(neighbor)
          parentStart[neighbor] = startVertex
        }
      }

      for (const neighbor of this.adjacencyList[goalVertex]) {
        if (visitedStart.has(neighbor)) {
          return this.constructPath(neighbor, parentStart, parentGoal)
        }
        if (!visitedGoal.has(neighbor)) {
          visitedGoal.add(neighbor)
          queueGoal.push(neighbor)
          parentGoal[neighbor] = goalVertex
        }
      }
    }

    return null // No path found
  }

  constructPath (meetingPoint, parentStart, parentGoal) {
    const pathStart = []
    let current = meetingPoint
    while (current) {
      pathStart.push(current)
      current = parentStart[current]
    }
    pathStart.reverse()

    const pathGoal = []
    current = parentGoal[meetingPoint]
    while (current) {
      pathGoal.push(current)
      current = parentGoal[current]
    }

    return pathStart.concat(pathGoal)
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
