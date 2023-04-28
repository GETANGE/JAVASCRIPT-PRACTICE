function bfs(graph, start) {
    const queue = [start];
    const visited = {};
    visited[start] = true;
  
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node);
  
      const neighbors = graph[node];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
bfs();