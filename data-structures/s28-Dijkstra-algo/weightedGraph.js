// Simple queue but not optimised
class PriorityQueue {
  constructor() {
    this.vals = [];
  }

  enqueue(val, priority) {
    this.vals.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.vals.shift();
  }

  sort() {
    this.vals.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] || (this.adjacencyList[vertex] = []);
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1] &&
      this.adjacencyList[v2] &&
      this.adjacencyList[v1].push({ node: v2, weight }) &&
      this.adjacencyList[v2].push({ node: v1, weight });
  }

  Dijkstra(start, end) {
    const distances = {},
      queue = new PriorityQueue(),
      previous = {};

    // Initial state
    for (const v of Object.keys(this.adjacencyList)) {
      if (v === start) {
        distances[v] = 0;
        queue.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        queue.enqueue(v, Infinity);
      }
    }

    // As long as a node is in the queue
    while (queue.vals.length) {
      const v = queue.dequeue().val;

      // Found shortest path
      if (v === end) {
        let curr = end;
        const shortest_path = [];
        while (curr !== start) {
          shortest_path.push(previous[curr]);
          curr = previous[curr];
        }
        return shortest_path.reverse();
      }

      // continue searching
      for (const { node, weight } of this.adjacencyList[v]) {
        const dist = weight + distances[v];
        if (dist < distances[node]) {
          distances[node] = dist;
          previous[node] = v;
          queue.enqueue(node, dist);
        }
      }
    }
  }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.Dijkstra("A", "E"));
console.log(g.Dijkstra("A", "F"));
