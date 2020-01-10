class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    if (!this.size || this.size === 0) return true;
    return false;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(7);
queue.dequeue();
