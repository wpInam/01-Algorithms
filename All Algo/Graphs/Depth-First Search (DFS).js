function dfs(graph, start) {
    const visited = new Set();
    const stack = [start];
  
    while (stack.length > 0) {
      const current = stack.pop(); // Only this thing is change in BFS
      visited.add(current);
  
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  
    return visited;
  }
  