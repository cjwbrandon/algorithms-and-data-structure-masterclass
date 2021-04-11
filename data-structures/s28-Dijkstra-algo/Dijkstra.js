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
    while (queue.val.length) {
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

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// Min Binary Heap
class PriorityQueue {
  constructor() {
    this.val = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.val.push(newNode);

    let idx = this.val.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (parentIdx >= 0 && this.val[parentIdx].priority > newNode.priority) {
      [this.val[parentIdx], this.val[idx]] = [
        this.val[idx],
        this.val[parentIdx],
      ];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  dequeue() {
    const max = this.val[0];
    const end = this.val.pop();
    if (this.val.length === 0) return max;
    this.val[0] = end;

    let idx = 0,
      leftChild = 2 * idx + 1,
      rightChild = 2 * idx + 2;
    const length = this.val.length;
    while (true) {
      let swap = null;

      if (leftChild < length && this.val[leftChild].priority < end.priority)
        swap = leftChild;
      if (
        rightChild < length &&
        this.val[rightChild].priority < end.priority &&
        this.val[rightChild].priority < this.val[leftChild].priority
      )
        swap = rightChild;

      if (swap) {
        [this.val[idx], this.val[swap]] = [this.val[swap], this.val[idx]];
        idx = swap;
        leftChild = 2 * idx + 1;
        rightChild = 2 * idx + 2;
      } else return max;
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
