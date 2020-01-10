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
  //Add a node to the end of the list
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  //Removes the last node of the list
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    this.poppedNode;
  }
  //Add a node to the front of the list
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  //Remove a node from the front of the list
  shift() {
    if (!this.head) return undefined;
    let shiftNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = shiftNode.next;
    this.head.prev = null;
    shiftNode.next = null;
    this.length--;
    return shiftNode;
  }
  //Get the node at the specified index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    //Cleaner code
    let count, current;
    //Do divide and conquer approach to make it more optimized
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  //Set the value of the node at a given node
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  //Insert a node at a given index(This was pain)
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let node = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = node;
    node.prev = prevNode;
    node.next = nextNode;
    nextNode.prev = node;

    this.length++;
    return true;
  }
  //Remove a node from a specific index
  remove(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return !!removedNode;
  }
}

let DoubleList = new DoublyLinkedList();
DoubleList.push(123);
DoubleList.push(23);
DoubleList.push(12);
DoubleList.push(2);
DoubleList.pop();
DoubleList.shift();
DoubleList.unshift(22);
DoubleList.unshift(43);
DoubleList.unshift(16);
DoubleList.unshift(8);
