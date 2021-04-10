class Node {
  constructure(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    // Empty tree
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // Find spot to insert value
    let curr = this.root;
    while (true) {
      if (val === curr.val) return undefined;
      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else if (curr > curr.right) {
        if (curr.right === null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  contains(val) {
    if (this.root === null) return false;

    let curr = this.root;
    while (curr) {
      if (curr.val === val) return true;
      else if (val > curr.val) curr = curr.right;
      else curr = curr.left;
    }
    return false;
  }
}
