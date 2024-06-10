function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
  
    while (queue.length > 0) {
      const current = queue.shift();// Only this thing is change in DFS
      visited.add(current);
  
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  
    return visited;
  }
  