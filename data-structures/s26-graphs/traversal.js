class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] || (this.adjacencyList[vertex] = []);
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1] &&
      this.adjacencyList[v2] &&
      this.adjacencyList[v1].push(v2) &&
      this.adjacencyList[v2].push(v1);
  }

  removeVertex(v) {
    if (this.adjacencyList[v]) {
      for (const v2 of this.adjacencyList[v]) this.removeEdge(v, v2);
      delete this.adjacencyList[v];
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] &&
      (this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2));
    this.adjacencyList[v2] &&
      (this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1));
  }

  DFSRecursive(start) {
    const results = [];
    const visited = {};

    const dfs = (v) => {
      visited[v] = true;
      results.push(v);

      this.adjacencyList[v].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          dfs(neighbour);
        }
      });
    };
    dfs(start);
    return results;
  }

  DFSIterative(start) {
    const stack = [],
      results = [],
      visited = {};

    stack.push(start);

    while (stack.length) {
      let v = stack.pop();
      if (!visited[v]) {
        visited[v] = true;
        results.push(v);
        this.adjacencyList[v].forEach(
          (neighbour) =>
            !visited[neighbour] &&
            stack.push(neighbour) &&
            (visited[neighbour] = true)
        );
      }
    }
    return results;
  }

  BFS(start) {
    const queue = [start],
      results = [],
      visited = {};
    while (queue.length) {
      const v = queue.shift();
      visited[v] = true;
      results.push(v);
      this.adjacencyList[v].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return results;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));
