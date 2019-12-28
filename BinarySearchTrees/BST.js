class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.val) return null;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  remove(value) {
    this.root = this._removeInner(value, this.root);
  }

  _removeInner(value, node) {
    if (node) {
      if (value < node.value) {
        node.left = this._removeInner(value, node.left);
      } else if (value > node.value) {
        node.right = this._removeInner(value, node.right);
      } else if (node.left && node.right) {
        node.value = this.findMinValue(node.right);
        node.right = this._removeInner(node.value, node.right);
      } else {
        node = node.left || node.right;
      }
    }
    return node;
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //BFS for in level order traversal
  BFS() {
    var data = [],
      queue = [],
      node = this.root;
    queue.unshift(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //Three types of Depth First Search
  preorder() {
    let data = [];
    let current = this.root;
    //immediately invoked function expression
    (function(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(current);
    return data;
  }
  inorder() {
    let data = [];
    let current = this.root;
    //immediately invoked function expression
    (function(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    })(current);
    return data;
  }
  postorder() {
    let data = [];
    let current = this.root;
    //immediately invoked function expression
    (function(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    })(current);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(12);
tree.inorder();
console.log(tree.BFS());
tree.remove(10);
console.log(tree.contains(12));
