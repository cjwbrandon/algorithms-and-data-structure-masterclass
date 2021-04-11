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
