class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const popped = this.tail;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = popped.prev;
      this.tail.next = popped.prev = null;
      this.length--;
    }
    return popped;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = oldHead.next;
      this.head.prev = oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let node;
    if (idx <= this.length / 2) {
      node = this.head;
      for (let i = 1; i <= idx; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        node = node.prev;
      }
    }
    return node;
  }

  set(idx, val) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode.next;
    prevNode.next = nextNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removed = this.get(idx);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.prev = removed.next = null;
    this.length--;
    return removed;
  }
}

list = new DoublyLinkedList();
list.push("hello");
list.push("halo");
// console.log(list);
// list.pop();
// list.shift();
list.unshift("hola");
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// list.set(10, "ajklsdfsaf");
// list.set(0, 123);
list.remove(1);
console.log(list);
