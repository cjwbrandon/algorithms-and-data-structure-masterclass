class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newTail = new Node(val);
    if (!this.head) this.head = this.tail = newTail;
    else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length <= 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;
    return current;
  }

  shift() {
    if (this.length <= 0) return undefined;
    const current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return current;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) this.head = this.tail = newHead;
    else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let node = this.head;
    for (let i = 1; i <= idx; i++) {
      node = node.next;
    }
    return node;
  }

  set(idx, val) {
    const node = this.get(idx);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const current = this.get(idx - 1);
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    const previous = this.get(idx - 1);
    const removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removeNode;
  }

  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let next;
    let prev = null;
    let node = this.tail;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("fool");

const list = new SinglyLinkedList();
// console.log(list.pop());
list.push("Hello");
list.push("Goodbye");
list.push("abc");
list.print();
// console.log(list);
// list.pop();
// console.log(list);
// list.unshift("Hi");
// list.unshift("Hola");
// console.log(list);
// list.shift();
// console.log(list);
// console.log(list.get(0));
// console.log(list.get(1));
// list.set(0, "HiHi");
// console.log(list);
// list.insert(0, "Hi");
// list.insert(1, "HOHO");
// console.log(list);
// list.remove(1);
// console.log(list);
list.reverse();
console.log(list);
list.print();
list.reverse();
list.print();
