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
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("India");
console.log(graph);
graph.addEdge("Tokyo", "India");
console.log(graph);
// graph.removeEdge("Tokyo", "India");
graph.removeVertex("Tokyo");
console.log(graph);
