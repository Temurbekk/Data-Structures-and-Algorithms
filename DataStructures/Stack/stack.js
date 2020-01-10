class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }
  //Add a node on top of the stack
  push(value) {
    let node = new Node(value);

    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      let temp = this.top;
      this.top = node;
      this.top.next = temp;
    }

    return ++this.size;
  }
  //Remove from the top of the stack
  pop() {
    if (!this.head) return null;

    let temp = this.top;

    if (this.top === this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.size--;

    return temp.value;
  }
  //See what is on top of the stack
  peak() {
    return this.top;
  }
  isEmpty() {
    if (!this.size || this.size === 0) return true;
    return false;
  }
}

let stack = new Stack();
stack.push('Hello');
stack.push('There!');
stack.push('YO!');
stack.push('WUZ GOOD!');
//Removes "WUZ GOOD" from the stack since it was inserted last
stack.pop();
