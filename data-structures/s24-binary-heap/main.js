class MaxBinaryHeap {
  constructor() {
    this.val = [];
  }

  insert(val) {
    this.val.push(val);

    let idx = this.val.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (parentIdx >= 0 && this.val[parentIdx] < val) {
      [this.val[parentIdx], this.val[idx]] = [
        this.val[idx],
        this.val[parentIdx],
      ];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  extractMax() {
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

      if (leftChild < length && this.val[leftChild] > end) swap = leftChild;
      if (
        rightChild < length &&
        this.val[rightChild] > end &&
        this.val[rightChild] > this.val[leftChild]
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

let heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
