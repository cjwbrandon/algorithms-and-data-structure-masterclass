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

let hospital = new PriorityQueue();
hospital.enqueue("common cold", 3);
console.log(hospital);

// TODO: Logic for time (maintain order of the same priority)
hospital.enqueue("high fever", 2);
console.log(hospital);

hospital.enqueue("covid", 2);
console.log(hospital);

hospital.enqueue("accident", 1);
console.log(hospital);
